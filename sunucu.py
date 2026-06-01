"""
Mobil PDF Dönüştürücü — Yerel Ağ Sunucusu
==========================================
Bu script, mobil uygulamayı yerel ağda sunar.
Telefonunuzdan tarayıcı ile bağlanabilirsiniz.

Kullanım: python sunucu.py
"""

import http.server
import socket
import os
import sys
import threading
import webbrowser

PORT = 8080


def yerel_ip_bul():
    """Bilgisayarın yerel ağ IP adresini bulur."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "localhost"


def main():
    # Windows terminal encoding sorununu coz
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

    ip = yerel_ip_bul()

    handler = http.server.SimpleHTTPRequestHandler
    # MIME type eklemeleri
    handler.extensions_map.update({
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.webmanifest': 'application/manifest+json',
    })

    server = http.server.HTTPServer(("0.0.0.0", PORT), handler)

    print()
    print("╔══════════════════════════════════════════════════════════╗")
    print("║        ⚡ BASİTLEŞTİRİCİ — MOBİL SUNUCU ⚡            ║")
    print("╠══════════════════════════════════════════════════════════╣")
    print("║                                                        ║")
    print(f"║  🌐 Bilgisayar : http://localhost:{PORT}                 ║")
    print(f"║  📱 Telefon    : http://{ip}:{PORT}            ║")
    print("║                                                        ║")
    print("║  Telefonunuzda tarayıcıyı açıp yukarıdaki              ║")
    print("║  telefon adresini yazın.                                ║")
    print("║                                                        ║")
    print("║  ⚠  Telefon ve bilgisayar aynı WiFi ağında             ║")
    print("║     olmalıdır!                                         ║")
    print("║                                                        ║")
    print("║  Durdurmak için: Ctrl+C                                ║")
    print("╚══════════════════════════════════════════════════════════╝")
    print()

    # QR kod oluşturmayı dene (opsiyonel)
    try:
        import qrcode
        url = f"http://{ip}:{PORT}"
        qr = qrcode.QRCode(version=1, box_size=1, border=1)
        qr.add_data(url)
        qr.make(fit=True)
        print("  📷 QR Kodu telefonla tarayın:")
        print()
        qr.print_ascii(invert=True)
        print()
    except ImportError:
        print(f"  💡 İpucu: 'pip install qrcode' ile QR kod desteği ekleyebilirsiniz.")
        print()

    # Tarayıcıda aç
    threading.Timer(1.0, lambda: webbrowser.open(f"http://localhost:{PORT}")).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Sunucu durduruldu.")
        server.server_close()


if __name__ == "__main__":
    main()
