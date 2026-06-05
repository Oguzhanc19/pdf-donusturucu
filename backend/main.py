from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import yt_dlp
import os
import uuid

app = FastAPI()

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
