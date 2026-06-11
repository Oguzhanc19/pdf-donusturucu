from fastapi import FastAPI, HTTPException, BackgroundTasks, UploadFile, File, Form
import time
import asyncio
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import yt_dlp
import os
import uuid
import json
import urllib.request
from pydantic import BaseModel

app = FastAPI()

# --- Pano/Dosya Paylaşım DB ve TTL Ayarları ---
pano_db = {
    "texts": [],
    "files": []
}
TTL_SECONDS = 600  # 10 dakika
PANO_DIR = "/tmp/pano_files" if os.name != "nt" else os.path.join(os.environ.get("TEMP", "."), "pano_files")
os.makedirs(PANO_DIR, exist_ok=True)

async def pano_cleanup_task():
    while True:
        now = time.time()
        pano_db["texts"] = [t for t in pano_db["texts"] if now - t["timestamp"] < TTL_SECONDS]
        
        valid_files = []
        for f in pano_db["files"]:
            if now - f["timestamp"] < TTL_SECONDS:
                valid_files.append(f)
            else:
                try:
                    if os.path.exists(f["filepath"]):
                        os.remove(f["filepath"])
                except Exception:
                    pass
        pano_db["files"] = valid_files
        await asyncio.sleep(10)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(pano_cleanup_task())


# Frontend'in bu API'ye erişebilmesi için CORS ayarları (GitHub Pages vb. için)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def delete_file(filepath: str):
    """İndirme işlemi bittikten ve kullanıcıya gönderildikten sonra dosyayı sunucudan siler."""
    try:
        if os.path.exists(filepath):
            os.remove(filepath)
    except Exception as e:
        print(f"Dosya silinirken hata oluştu: {e}")

@app.get("/")
def home():
    return {"status": "success", "message": "YouTube Downloader API çalışıyor!"}

@app.get("/api/download")
async def download_media(url: str, background_tasks: BackgroundTasks, isAudioOnly: str = "false"):
    try:
        # Benzersiz bir dosya adı oluştur (aynı anda indirme yapıldığında karışmaması için)
        file_id = str(uuid.uuid4())
        
        # Render.com veya diğer sistemler için geçici dizin kullanımı
        temp_dir = "/tmp" if os.name != "nt" else os.environ.get("TEMP", ".")
        out_tmpl = os.path.join(temp_dir, f"{file_id}.%(ext)s")
        
        ydl_opts = {
            'outtmpl': out_tmpl,
            'quiet': True,
            'no_warnings': True,
            'format': 'best', # Varsayılan video formatı
            'extractor_args': {
                'youtube': ['player_client=android,web']
            }
        }
        
        if isAudioOnly.lower() == "true":
            # Sadece ses indir
            ydl_opts['format'] = 'm4a/bestaudio/best'
            
        # Dosyayı sunucuya indir
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            ext = info.get('ext', 'mp4') if isAudioOnly.lower() != "true" else info.get('ext', 'm4a')
            
            final_file = os.path.join(temp_dir, f"{file_id}.{ext}")
            safe_title = "".join(c for c in info.get('title', 'video') if c.isalnum() or c in " -_").strip()
            filename_for_user = f"{safe_title}.{ext}"

            # İşlem bittiğinde arka planda dosyayı sunucudan silmesi için görev ekle
            background_tasks.add_task(delete_file, final_file)
            
            # Dosyayı kullanıcıya (tarayıcıya) gönder
            return FileResponse(
                path=final_file,
                media_type="application/octet-stream",
                filename=filename_for_user
            )

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

class EmailRequest(BaseModel):
    draftText: str
    tone: str

# Kullanıcının gizli API anahtarı (Güvenli Sunucu Tarafı)
import os
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

@app.post("/api/ai/email")
async def improve_email(req: EmailRequest):
    prompt = f"""Sen uzman bir metin yazarısın ve kurumsal iletişim danışmanısın. Kullanıcı sana aceleyle, özensiz veya günlük dille yazılmış bir metin/fikir verecek. Senin görevin bu fikri alıp, **{req.tone}** tonunda mükemmel bir şekilde yeniden yazmak. 
E-posta veya mesaj formatında hazırla. Başka hiçbir açıklama, yorum veya "İşte metniniz" gibi giriş cümleleri yazma. Sadece doğrudan kullanılabilir, profesyonel son metni ver.

Kullanıcının metni:
"{req.draftText}" """

    models_to_try = ['gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.0-flash']
    
    last_error = ""
    for model in models_to_try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0.7}
        }
        data = json.dumps(payload).encode('utf-8')
        req_obj = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
        try:
            with urllib.request.urlopen(req_obj) as response:
                result = json.loads(response.read().decode('utf-8'))
                text = result.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                if text:
                    return {"status": "success", "text": text}
        except urllib.error.HTTPError as e:
            err_resp = e.read().decode('utf-8')
            last_error = err_resp
            continue
        except Exception as e:
            last_error = str(e)
            continue
            
    raise HTTPException(status_code=500, detail=f"Yapay zeka modellerine ulaşılamadı. Son hata: {last_error}")

class AskRequest(BaseModel):
    question: str

@app.post("/api/ai/ask")
async def ask_ai(req: AskRequest):
    prompt = f"Sen kullanıcının sorularına yardımcı olan Türkçe konuşan zeki bir asistan yapay zekasın. Lütfen şu soruya veya mesaja en iyi şekilde cevap ver:\n\n{req.question}"

    models_to_try = ['gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.0-flash']
    
    last_error = ""
    for model in models_to_try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0.7}
        }
        data = json.dumps(payload).encode('utf-8')
        req_obj = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
        try:
            with urllib.request.urlopen(req_obj) as response:
                result = json.loads(response.read().decode('utf-8'))
                text = result.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "")
                if text:
                    return {"status": "success", "text": text}
        except urllib.error.HTTPError as e:
            err_resp = e.read().decode('utf-8')
            last_error = err_resp
            continue
        except Exception as e:
            last_error = str(e)
            continue
            
            raise HTTPException(status_code=500, detail=f"Yapay zeka yanıt veremedi. Son hata: {last_error}")

# --- Pano (Clipboard) Endpoints ---
@app.post("/api/clipboard/text")
async def clipboard_receive_text(text: str = Form(...)):
    pano_db["texts"].insert(0, {
        "id": str(uuid.uuid4()),
        "content": text,
        "timestamp": time.time(),
        "time_str": time.strftime("%H:%M:%S")
    })
    return {"status": "success"}

@app.post("/api/clipboard/file")
async def clipboard_receive_file(file: UploadFile = File(...)):
    file_id = str(uuid.uuid4())
    ext = file.filename.split('.')[-1] if '.' in file.filename else ''
    safe_name = f"{file_id}.{ext}" if ext else file_id
    filepath = os.path.join(PANO_DIR, safe_name)
    
    with open(filepath, "wb") as f:
        f.write(await file.read())
    
    pano_db["files"].insert(0, {
        "id": file_id,
        "filename": file.filename,
        "filepath": filepath,
        "timestamp": time.time(),
        "time_str": time.strftime("%H:%M:%S")
    })
    return {"status": "success"}

@app.get("/api/clipboard/data")
async def clipboard_get_data():
    return pano_db

@app.get("/api/clipboard/download/{file_id}")
async def clipboard_download_file(file_id: str):
    for f in pano_db["files"]:
        if f["id"] == file_id and os.path.exists(f["filepath"]):
            return FileResponse(path=f["filepath"], filename=f["filename"])
    raise HTTPException(status_code=404, detail="Dosya bulunamadı veya süresi doldu")
