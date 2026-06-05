# ⚡ Basitleştirici — Tüm Araçlar Tek Yerde

<div align="center">

![Basitleştirici](https://img.shields.io/badge/Basitle%C5%9Ftirici-v3.0-6366f1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTEzIDEwVjNMNCAxNGg3djdsMTAtMTFoLTh6Ii8+PC9zdmc+)
![License](https://img.shields.io/badge/Lisans-MIT-10b981?style=for-the-badge)
![PWA](https://img.shields.io/badge/PWA-Destekli-8b5cf6?style=for-the-badge)
![Araçlar](https://img.shields.io/badge/40%2B-Araç-f43f5e?style=for-the-badge)

**Yapay Zeka, PDF, Video, Resim ve Metin işlemlerinizi tek tıkla yapın.**

[🌐 Siteyi Aç](https://oguzhanc19.github.io/pdf-donusturucu/) · [🐛 Hata Bildir](https://github.com/Oguzhanc19/pdf-donusturucu/issues)

</div>

---

## 🚀 Özellikler

### 💼 Profesyonel İş & Yapay Zeka (Yeni!)
Arka planda dünyanın en güçlü **2026 Model Google Gemini** modellerini kullanarak çalışan kişisel asistanınız.
| Araç | Açıklama |
|------|----------|
| **Yapay Zeka E-posta Asistanı** | Özensiz ve günlük metinleri kusursuz, profesyonel kurumsal e-postalara dönüştürür. |
| **Yapay Zekaya Sor** | İstediğiniz soruyu sorun, yapay zeka anında cevaplasın veya sizin için kod/metin yazsın. |

### 📄 PDF ve Dosya İşlemleri

| Araç | Açıklama |
|------|----------|
| Word → PDF | Word dosyasını PDF'e dönüştürür |
| **PNG/JPG → PDF** | Resimleri tek PDF'te birleştirir |
| **PDF Birleştirme** | Birden fazla PDF'i birleştirir |
| PDF Bölme | PDF'i sayfa aralığına göre böler |
| PDF Sıkıştırma | PDF dosya boyutunu küçültür |
| PDF Şifreleme | PDF'e şifre koyar |
| PDF Şifre Kaldırma | Şifreli PDF'i açar |
| PDF Sayfa Döndürme | Sayfaları 90°/180°/270° döndürür |
| PDF Sayfa Silme | İstenmeyen sayfaları siler |
| PDF Filigran Ekleme | Tüm sayfalara filigran ekler |
| PDF'ten Metin Çekme | PDF'ten metin çıkarır (OCR) |

### 🎥 Video İşlemleri

| Araç | Açıklama |
|------|----------|
| **URL'den Video İndirme** | YouTube ve diğer URL'lerden video indir |
| **URL'den Ses İndirme** | URL'den MP3 olarak ses indir |
| Video Format Dönüştürme | MP4, WEBM, AVI arası dönüşüm |
| Video Sıkıştırma | Video boyutunu küçültür |
| Videodan Ses Ayırma | Videodan ses dosyasını çıkarır |
| Videodan Ekran Görüntüsü | İstediğiniz kareden screenshot alır |
| Video Birleştirme | Birden fazla videoyu birleştirir |
| Video Kırpma | Videonun belirli bölümünü keser |

### 🖼️ Resim İşlemleri

| Araç | Açıklama |
|------|----------|
| **Arka Plan Kaldırma** | Resim arka planını şeffaf yapar |
| **Resim Sıkıştırma** | Kalite ayarlı sıkıştırma |
| JPG ↔ PNG | Format dönüşümü |
| WEBP ↔ PNG | Format dönüşümü |
| Resim Yeniden Boyutlandırma | Pixel bazlı boyut değiştirme |
| Toplu Resim İşleme | Birden fazla resmi toplu işler |
| Resim Döndürme | 90°, 180°, 270°, yatay/dikey çevir |
| Filigran Ekleme | Resme metin filigranı ekler |
| **QR Kod Oluşturma** | Metin veya URL'den QR kod üretir |
| Barkod Oluşturma | Code 128 / Code 39 barkod üretir |

---

## 🛠️ Mimari ve Teknolojiler

Basitleştirici V3.0 artık **Hibrit (Tarayıcı + Bulut)** yapısına geçmiştir.

* **Ön Yüz (Frontend):** PWA özellikli, offline çalışabilen, sunucusuz statik web sayfası (GitHub Pages). PDF birleştirme, resim sıkıştırma gibi işlemler tamamen cihazınızda (tarayıcıda) offline olarak gerçekleşir.
* **Arka Yüz (Backend):** FastAPI ve Python ile yazılmış bulut API sunucusu (Render.com). Video indirme, Yapay Zeka (Gemini API) iletişimi gibi ağır işlemler ve güvenli API anahtarı barındırma işlemleri tamamen izole bulut ortamında gerçekleşir.

---

## 🔒 Gizlilik ve Güvenlik

- **Yapay Zeka İşlemleri:** Gemini API anahtarları yalnızca backend (Render) üzerinde güvenle tutulur. Kullanıcı tarayıcısına asla gönderilmez.
- **İstemci İşlemleri:** Araçların %90'ı sadece tarayıcınızda (offline) çalışır, dosyalarınız asla bir sunucuya yüklenmez (Örn: Resim Sıkıştırma, PDF Düzenlemeleri).
- **Sunucu İşlemleri:** Sadece video indirme aracı sunucuya URL isteği atar, ancak indirilen videolar anında sunucudan tamamen silinir.

---

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Dilediğiniz gibi kullanabilir, değiştirebilir ve dağıtabilirsiniz.

---

<div align="center">

**⚡ Basitleştirici** ile hayatınızı kolaylaştırın!

Made with ❤️ by [Oguzhanc19](https://github.com/Oguzhanc19)

</div>
