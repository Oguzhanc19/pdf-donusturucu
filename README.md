# 📄 PDF Otomatik Dönüştürücü ve Mobil Sunucu

[![Web Sitesi](https://img.shields.io/badge/🌐_Web_Sitesi-Ziyaret_Et-blue?style=for-the-badge)](https://oguzhanc19.github.io/pdf-donusturucu/)

Mobil platformlardaki dosya erişim kısıtlamalarını aşmak ve dönüştürme süreçlerini tam otomatik bir iş akışına bağlamak amacıyla geliştirilmiş yerel (local) bir otomasyon aracıdır. 

Bu sistem, belirlenen hedef klasörleri sürekli olarak izler ve içerisine atılan fotoğraf veya belgeleri anında tek bir PDF dosyasında birleştirir. Ayrıca, yerel ağ üzerinden mobil cihazlarla haberleşerek telefonunuzdaki dosyaları bilgisayarınıza aktarıp dönüştürmenizi sağlayan bir sunucu modülüne sahiptir.

## 🌐 Proje Web Sitesi
Projenin detaylarına, kullanım senaryolarına ve daha fazlasına hazırladığım web sitesinden ulaşabilirsiniz:  
👉 **[oguzhanc19.github.io/pdf-donusturucu](https://oguzhanc19.github.io/pdf-donusturucu/)**

## ✨ Temel Özellikler

* **Otomatik İzleme (Watchdog):** 'Fotograflar' ve 'Belgeler' klasörlerini anlık olarak izler; dosya eklendiğinde, silindiğinde veya değiştirildiğinde PDF oluşturma işlemini insan müdahalesi olmadan otomatik olarak başlatır.
* **Geniş Dosya Desteği:** * Resimler: `.jpg`, `.jpeg`, `.png`, `.bmp`, `.gif`, `.tiff`, `.tif`, `.webp`
    * Belgeler: `.docx`, `.doc`, `.txt`, `.pdf`
* **Mobil Sunucu Entegrasyonu:** Telefon ve bilgisayarınız aynı WiFi ağına bağlı olduğu sürece, mobil cihazınızdan gönderdiğiniz dosyaları işleyebilmek için bir sunucu altyapısı sunar.
* **Şeffaflık Kontrolü:** PNG gibi şeffaf (RGBA) arka plana sahip görselleri otomatik olarak tespit eder ve PDF uyumluluğu için arka planlarını beyaza çevirerek RGB formatına dönüştürür.
* **İki Farklı Çalışma Modu:** Sistemi arka planda sürekli çalışır halde bırakabileceğiniz gibi, dilediğinizde tek bir komutla anlık dönüştürme de yapabilirsiniz.

## 🛠️ Kurulum

Sistemin bilgisayarınızda sorunsuz çalışabilmesi için gerekli kütüphanelerin kurulması gerekmektedir. Proje dizininde bir terminal açarak aşağıdaki bağımlılıkları yükleyin:

```bash
pip install Pillow>=10.0.0 watchdog>=3.0.0 docx2pdf>=0.1.8
```
