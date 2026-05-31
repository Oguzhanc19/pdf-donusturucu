# 📄 Fotoğraf - PDF Dönüştürücü (Image to PDF Converter)

Bu proje, Android cihazlarda cihaz hafızasındaki fotoğrafları seçerek tek bir tıkla PDF belgesine dönüştürmenizi sağlayan, **Python** tabanlı bir mobil uygulamadır. 

Özellikle belge taramaları, not fotoğrafları veya kimlik görüntülerini hızlıca tek bir PDF dosyasında toplamak için geliştirilmiştir.

## ✨ Özellikler

* **Dahili Dosya Yöneticisi:** Android'in kısıtlayıcı güvenlik politikalarına (Scoped Storage) takılmadan, uygulamanın kendi içerisindeki dosya gezgini ile doğrudan klasörlere erişim.
* **Çoklu Seçim:** Birden fazla PNG, JPG veya JPEG formatındaki fotoğrafı aynı anda seçebilme.
* **Otomatik Dönüştürme:** Seçilen fotoğrafları otomatik olarak RGB formatına uyarlayıp tek bir PDF belgesine dönüştürme.
* **Çevrimdışı Çalışma:** Hiçbir internet bağlantısı gerektirmeden tüm işlemleri cihazın kendi işlemcisiyle yapma.

## 🛠️ Kullanılan Teknolojiler

Bu uygulama, tamamen Python dili kullanılarak geliştirilmiş ve Android platformuna derlenmiştir:

* **[Python 3](https://www.python.org/):** Temel programlama dili.
* **[Kivy](https://kivy.org/):** Mobil uyumlu grafiksel kullanıcı arayüzü (GUI) ve dahili dosya gezgini (`FileChooserListView`) için.
* **[Pillow (PIL)](https://pillow.readthedocs.io/):** Fotoğrafları okumak, işlemek ve PDF formatında kaydetmek için.
* **[Buildozer](https://buildozer.readthedocs.io/):** Python kodunu Android için `.apk` dosyasına dönüştüren (paketleyen) derleme aracı.

## 🚀 Kurulum ve Çalıştırma

### Bilgisayarda (Python ile) Test Etmek İçin:
1. Projeyi bilgisayarınıza klonlayın.
2. Gerekli kütüphaneleri kurun:
```bash
   pip install kivy pillow
