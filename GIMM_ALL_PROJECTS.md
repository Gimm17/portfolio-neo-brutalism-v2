# GIMM — Master Project List
> File ini berisi SEMUA project yang pernah dikerjakan oleh **Gimm (Nvia)**, founder Gimora Digital (gimoradigital.id).
> Lampirkan file ini di awal chat baru agar Claude langsung memiliki konteks penuh.
> Terakhir diupdate: 23 April 2026

---

## IDENTITAS

- **Nama:** Nvia (dipanggil Gimm)
- **Latar belakang:** Fresh graduate Teknik Informatika, STMIK Bina Mulia Palu
- **Perusahaan:** Gimora Digital — IT Agency berbasis Sulawesi Tengah, fokus AI + Web Dev untuk UMKM, pemerintah, dan akademik
- **Website:** gimoradigital.id | gimora.my.id
- **Stack utama:** Laravel 12, Vue 3, Inertia.js, Tailwind CSS, Python, MySQL, cPanel
- **GitHub:** github.com/Gimm17
- **Lokasi project Laravel:** `C:\Users\HP\Laravel`
- **Lokasi project Python:** `C:\Users\HP\OneDrive\Documents\CODINGAN\PYTHON`
- **Lokasi project legacy:** `C:\xampp\htdocs`

---

## BAGIAN 1 — PROJECT LARAVEL (Modern, 2026)
> Lokasi: `C:\Users\HP\Laravel`

---

### 1. UmkmAI
- **Deskripsi:** Platform SaaS open-source omnichannel AI inbox untuk UMKM Indonesia. Satu dashboard untuk balas pesan WA + AI otomatis.
- **Stack:** Laravel 12, Vue 3, Inertia.js, Tailwind CSS v4, shadcn-vue, Redis, Soketi (WebSocket), Pinia, MySQL
- **Fitur utama:** Multi-AI fallback chain (Gemini → Kimi → GLM → Claude), realtime chat via WebSocket, warm pastel design system, per-conversation Pinia store namespacing
- **Status:** In Progress
- **Dibuat:** 19 Maret 2026 | Update terakhir: 23 Maret 2026

---

### 2. DataNarasi
- **Deskripsi:** AI Report Analyst — upload CSV/Excel → otomatis cleaning data → generate visualisasi → AI tulis narasi bisnis dalam Bahasa Indonesia.
- **Stack:** Laravel 12, Vue 3, Inertia.js, shadcn-vue, FastAPI (Python service), Pandas, MySQL, Gemini API, Kimi API, GLM API, Claude API
- **Fitur utama:** Multi-AI fallback chain, Python/Pandas data pipeline, narasi output Bahasa Indonesia, cocok untuk UMKM & mahasiswa
- **Path lokal:** `C:\Users\HP\Laravel\data-narasi`
- **Status:** In Progress
- **Dibuat:** 23 Maret 2026 | Update terakhir: 24 Maret 2026

---

### 3. Sellora
- **Deskripsi:** E-Commerce & POS system. Sub-produk resmi Gimora Digital.
- **Stack:** Laravel, PHP
- **Namespace:** `gimm/sellora`
- **Status:** Selesai (fase awal)
- **Dibuat:** 5 Maret 2026 | Update terakhir: 5 Maret 2026

---

### 4. RevenueForge (v1 & v2)
- **Deskripsi:** CRM / Finance Dashboard SaaS untuk tracking pendapatan, konversi metrik, dan manajemen pemasukan kas.
- **Stack:** Laravel, PHP, Node.js
- **Status:** Selesai
- **Dibuat:** 3 Maret 2026 (v1) & 3 Maret 2026 (v2) | Update terakhir: 4 Maret 2026

---

### 5. Gimora Platform
- **Deskripsi:** Platform web utama Gimora Digital. Custom web app dengan banyak file log tracking dan backup.
- **Stack:** Laravel, PHP, Composer
- **Status:** Selesai
- **Dibuat:** 26 Februari 2026 | Update terakhir: 28 Februari 2026

---

### 6. Cafe QR Ordering
- **Deskripsi:** Sistem pemesanan makanan/minuman cafe berbasis QR code dengan realtime order tracking (polling sinkronisasi).
- **Stack:** Laravel, Vue 3, Pinia, Vite, PHP
- **Status:** Selesai
- **Dibuat:** 3 Februari 2026 | Update terakhir: 9 Maret 2026

---

### 7. SORAYA Cafe QR
- **Deskripsi:** White-label instance sistem Cafe QR khusus untuk bisnis "Soraya Cafe". Turunan dari Cafe QR Ordering.
- **Stack:** Laravel, PHP, MySQL
- **Status:** Selesai
- **Dibuat:** 3 Februari 2026 | Update terakhir: 7 Maret 2026

---

### 8. GIS Cafe QR v2
- **Deskripsi:** Hybrid — gabungan pemetaan wilayah GIS + sistem cafe QR ordering dalam satu sistem.
- **Stack:** Laravel, PHP, kemungkinan PostgreSQL/PostGIS atau MySQL
- **Status:** Selesai
- **Dibuat:** 16 Februari 2026 | Update terakhir: 16 Februari 2026

---

### 9. SMAN 3 Poso Website
- **Deskripsi:** Website resmi SMA Negeri 3 Poso (akreditasi A, NPSN 40201356). Project Gimora Digital.
- **Stack:** Laravel 12, Vue 3, Inertia.js, Tailwind CSS, shadcn-vue, MySQL, cPanel, Stitch Design System
- **Fitur:** Galeri/Album (masonry + lightbox), berita/pengumuman, PPDB, data alumni, fasilitas, admin panel (role & permission), 13 tabel ERD
- **Progress:** PRD 12-bab selesai (DOCX + MD), UI design via Google Stitch MCP, 10 Antigravity build prompts disiapkan
- **Status:** In Progress
- **Dibuat:** 10 April 2026 | Update terakhir: 11 April 2026

---

### 10. Hotel LYVN
- **Deskripsi:** Sistem manajemen booking / company profile Hotel Lyvn.
- **Stack:** Laravel, PHP, Web
- **Status:** Selesai (scaffolding awal)
- **Dibuat:** 10 April 2026 | Update terakhir: 10 April 2026

---

### 11. Pemetaan Wilayah Palu (GIS)
- **Deskripsi:** Platform GIS live pemetaan wilayah Kota Palu. 930+ data points dengan fitur filter. Dibuat sebagai persiapan interview.
- **Stack:** Laravel, Vue.js, GIS library (Leaflet.js), MySQL
- **URL Live:** pemwilpalu.gimmhost.my.id
- **Status:** Live / Deployed
- **Dibuat:** 30 Januari 2026 | Update terakhir: 30 Januari 2026

---

### 12. Palu GIS Starter
- **Deskripsi:** Boilerplate / template siap pakai untuk proyek GIS spesifik Kota Palu.
- **Stack:** Leaflet.js, HTML, JS
- **Status:** Selesai (template)
- **Dibuat:** 27 Januari 2026

---

### 13. UMKM Banggai Kepulauan E-Catalog
- **Deskripsi:** Platform e-catalog live untuk ratusan pelaku UMKM Banggai Kepulauan. Proyek klien Gimora.
- **Stack:** Laravel, Vue.js, MySQL, cPanel
- **Status:** Live / Deployed

---

### 14. Portfolio Website (Gimm)
- **Deskripsi:** Personal portfolio website untuk showcase project ke publik.
- **Stack:** Native HTML, CSS, JavaScript
- **URL:** portofolio.gimmai.my.id
- **Status:** Selesai
- **Dibuat:** 5 April 2026 | Update terakhir: 5 April 2026

---

## BAGIAN 2 — PROJECT PYTHON (AI, ML, Automasi)
> Lokasi: `C:\Users\HP\OneDrive\Documents\CODINGAN\PYTHON`

---

### 15. PulmonaryDetect
- **Deskripsi:** Web app deteksi penyakit paru-paru dari foto chest X-ray secara real-time. Project riset + produksi.
- **Stack:** Python 3.9+, Flask, TensorFlow.js, Teachable Machine API (MobileNet transfer learning), Vanilla JS/HTML/CSS, WebRTC
- **Arsitektur:** Client-side inference — model `.json` + `weights.bin` diunduh ke browser, seluruh prediksi dilakukan 100% di frontend (data medis tidak pernah dikirim ke server)
- **Fitur:** Drag & drop upload foto + live WebRTC camera (5 FPS AI, 30 FPS kamera), SPA navigation custom tanpa reload, confidence level color indicator (merah >90%, kuning 70-90%, biru <70%)
- **Kelas:** Normal, Pneumonia, Tuberculosis, Other
- **Performa model:** Accuracy 99.51% · F1-Score 99.51% · AUC 0.9999
- **URL Live:** pulmonarydetect.gimmhost.my.id
- **Status:** Live / Deployed

---

### 16. CNN Klasifikasi Penyakit Paru (Skripsi)
- **Deskripsi:** Riset deep learning klasifikasi chest X-ray 3 kelas (Normal, Pneumonia, Tuberkulosis) menggunakan CNN from-scratch. 3 iterasi arsitektur sistematis.
- **Stack:** Python, TensorFlow, Keras, NumPy, Matplotlib, Jupyter Notebook, Google Colab, Google Drive API
- **Dataset:** ~2.570 gambar chest X-ray (Kaggle Lung Disease Classification Dataset). Split: Train ±1.803 / Val ±219 / Test 548, balanced.
- **Iterasi:**
  - v1: 26 juta parameter → mode collapse, akurasi 33% (gagal)
  - v2: label_smoothing=0.1 + LR kecil → equilibrium degeneratif (gagal)
  - v3: ~500K parameter, CE tanpa smoothing, LR=1e-3, class_weight, BN momentum=0.9 → **Akurasi 89.42%, F1 0.8933, AUC 0.9730** (berhasil)
- **Transfer learning:** DenseNet121 → 96.53% akurasi, AUC 0.9944 (terbaik). EfficientNetB0 → gagal total. VGG16 juga diuji.
- **Output:** Naskah jurnal format JOIV + JTIIK (bilingual Indonesia/English), materi bimbingan skripsi
- **Status:** Selesai

---

### 17. CNN Klasifikasi Apel & Bunga
- **Deskripsi:** Klasifikasi citra buah apel dan berbagai jenis bunga menggunakan CNN dengan arsitektur VGG16 dan VGG19.
- **Stack:** Python, TensorFlow, Keras, VGG16, VGG19, Jupyter Notebook
- **Status:** Selesai

---

### 18. TeachableMachine Live Cam
- **Deskripsi:** Deteksi dan klasifikasi real-time dari feed webcam. Mengenali bahasa isyarat tangan (sign language) dan tipe hewan menggunakan model pre-trained dari Google Teachable Machine.
- **Stack:** Python, OpenCV (cv2), Keras, model `.h5`
- **File:** `sign language live cam.py`, `CNN Animal fix.py`
- **Status:** Selesai

---

### 19. AUTOMASI_SIGIZI
- **Deskripsi:** Bot otomatis input data balita ke platform web Sigizi (sistem gizi pemerintah) langsung dari file Excel.
- **Stack:** Python, Playwright, OpenPyXL
- **Input:** `data_balita.xlsx`
- **Status:** Active (digunakan)
- **Dibuat:** April 2026

---

### 20. BOT_AUTOPIXEL
- **Deskripsi:** Bot otomasi web untuk checking ketersediaan promo piksel + bypass autentikasi login Google.
- **Stack:** Python, Selenium/Playwright, Google Auth (`google_auth.py`)
- **Catatan:** Konsep ditolak karena potensi ToS violation
- **Status:** Selesai / Archived

---

### 21. Twitter Scraper (#MeToo Analytics)
- **Deskripsi:** Web scraper data tweet untuk hashtag `#MeToo` per periode waktu (yearly). Output ke CSV dan XLSX.
- **Stack:** Python, Playwright/Selenium, Pandas
- **File output:** Dataset `.csv` dan `.xlsx`
- **Status:** Selesai
- **Dibuat:** Desember 2025

---

### 22. Dijkstra Shortest Path
- **Deskripsi:** Implementasi algoritma Dijkstra untuk teori graf — mencari rute terpendek dengan visualisasi node-edge secara matematis dan visual.
- **Stack:** Python, NetworkX, Matplotlib/Pyplot
- **Status:** Selesai (tugas/research)
- **Dibuat:** Juli – November 2023

---

### 23. Tugas Kuliah Python (Kumpulan)
- **Deskripsi:** Kumpulan project dasar Python dari masa kuliah dan praktikum.
- **Isi:**
  - Sorting & Searching: Bubble Sort, Exchange Sort, Brute Force String
  - Sistem Keamanan: DES cipher (`DESchiper.py`)
  - GUI Desktop: Tkinter (volume bola, luas segitiga, resep obat)
  - Python-to-EXE: konversi `.py` ke `.exe` via PyInstaller
  - Regresi Linear, Python Turtle, WordCloud (Batman shape)
  - Script utility: gacha logic, web automation sederhana
- **Stack:** Python, Tkinter, PyInstaller, Matplotlib, NetworkX
- **Status:** Selesai (arsip kuliah)

---

## BAGIAN 3 — PROJECT PHP LEGACY (XAMPP / htdocs)
> Lokasi: `C:\xampp\htdocs`

---

### 24. Salakan UMKM
- **Deskripsi:** Portal pendataan, publisitas, dan promosi UMKM kawasan Salakan (Banggai Kepulauan). Project klien aktif dengan Git.
- **Stack:** CodeIgniter 3, MySQL, Git
- **Status:** Live / Deployed
- **Dibuat:** 19 Juni 2025 | Update terakhir / Git push: 16 Maret 2026

---

### 25. Yovan Trans
- **Deskripsi:** Sistem reservasi, company profile, dan booking online untuk jasa perjalanan Yovan Trans. Dilengkapi test suite.
- **Stack:** CodeIgniter 3, MySQL, Git, Test Suite
- **Status:** Live / Active
- **Dibuat:** 11 Februari 2026 | Update terakhir: 5 April 2026

---

### 26. PMI Donor Darah
- **Deskripsi:** Sistem informasi Palang Merah Indonesia — rekam medis pendonor, manajemen relawan, pencatatan kebutuhan donor darah.
- **Stack:** CodeIgniter 3, MySQL, reCaptcha
- **Status:** Selesai
- **Dibuat:** 7 Desember 2023 | Update terakhir: 28 Januari 2024

---

### 27. Aplikasi Akademik
- **Deskripsi:** Sistem informasi akademik (kelola data siswa/guru/mahasiswa). Arsitektur Native PHP prosedural.
- **Stack:** Native PHP, MySQL
- **Status:** Selesai
- **Dibuat:** 28 Juli 2023 | Update terakhir: 3 Oktober 2024

---

### 28. E-Commerce (WordPress/WooCommerce)
- **Deskripsi:** Platform toko online berbasis WordPress + WooCommerce untuk penjualan produk.
- **Stack:** WordPress, WooCommerce, PHP, MySQL
- **Status:** Selesai
- **Dibuat:** 31 Mei 2023 | Update terakhir: 20 Oktober 2025

---

### 29. Lyvn Store
- **Deskripsi:** Toko online brand Lyvn berbasis WordPress + WooCommerce.
- **Stack:** WordPress, WooCommerce, PHP, MySQL
- **Status:** Selesai
- **Dibuat:** 1 Juni 2023 | Update terakhir: 20 Oktober 2025

---

### 30. Klasifikasi Data Web
- **Deskripsi:** Web app berbasis PHP untuk klasifikasi dan analisis data. Menggunakan vendor library pihak ketiga.
- **Stack:** PHP Native, HTML, CSS, JS
- **Status:** Selesai
- **Dibuat:** 17 Mei 2025 | Update terakhir: 7 Juni 2025

---

### 31. Mahasiswa New (CI4)
- **Deskripsi:** Portal sistem manajemen data mahasiswa modern menggunakan CodeIgniter 4 — MVC, namespaces, Spark, Routes.
- **Stack:** CodeIgniter 4, PHP, Composer
- **Status:** Selesai
- **Dibuat:** 13 November 2023

---

### 32. ProjectOne (CI4 Starter)
- **Deskripsi:** Boilerplate / starter app CI4 untuk pembelajaran routing, autoload, dan namespace.
- **Stack:** CodeIgniter 4, PHP
- **Status:** Selesai (template)
- **Dibuat:** 13 November 2023

---

### 33. KLP3 & KLP4 (Tugas Kelompok)
- **Deskripsi:** Dua proyek tugas kelompok berbasis CodeIgniter 3 — sistem informasi/pengolahan data berbasis form dengan reCaptcha.
- **Stack:** CodeIgniter 3, PHP, MySQL, reCaptcha, Composer
- **Status:** Selesai (tugas akademik)
- **Dibuat:** Februari 2024

---

### 34. MHS MVC & ProjectCI3
- **Deskripsi:** Template/boilerplate dasar CodeIgniter 3 untuk pembelajaran MVC dan pondasi project berikutnya.
- **Stack:** CodeIgniter 3, PHP, XAMPP
- **Status:** Selesai (template)
- **Dibuat:** November – Desember 2023

---

### 35. WordPress Staging (tesWP)
- **Deskripsi:** Environment staging lokal untuk uji plugin, tema kustom, dan fitur WordPress baru sebelum deploy ke production.
- **Stack:** WordPress, PHP, MySQL
- **Status:** Selesai (test bed)
- **Dibuat:** 17 Mei 2023 | Update terakhir: 25 September 2025

---

### 36. Belajar PHP Dasar
- **Deskripsi:** Sandbox latihan PHP dasar — eksperimen awal pemrograman web dari masa kuliah.
- **Stack:** PHP Native
- **Status:** Arsip
- **Dibuat:** 9 Juni 2023

---

## BAGIAN 4 — KOMPETISI

---

### 37. Mayar Vibecoding Competition 2026
- **Deskripsi:** "AI Revenue OS for Creators & UMKM" — platform manajemen revenue berbasis AI. Integrasi penuh Mayar Payment Gateway.
- **Stack:** Laravel 12, Inertia.js, Vue 3, MySQL, Redis, Railway, Mayar API
- **Integrasi Mayar:** invoice/create, customer/create, Webhook realtime, transaction/paidtransaction, discount/create, Membership SaaS
- **Unique angle:** Platform memonetisasi dirinya sendiri via Mayar (SaaS berbayar)
- **Deploy:** Railway
- **Status:** Submitted
- **Timeline build:** 12 hari dengan master Cursor prompt

---

## BAGIAN 5 — DATA & BUSINESS INTELLIGENCE

---

### 38. Power BI FMCG Sales Dashboard
- **Deskripsi:** Dashboard analitik penjualan FMCG dari scratch di Power BI — native visuals + custom HTML Content visual dengan SVG chart di-render via DAX measures.
- **Stack:** Power BI, DAX, Power Query (M), HTML Content Visual, SVG
- **Dataset:** FMCG sales 20.000+ baris. Data cleaning intensif di SQLite (konversi format Rupiah teks ke numerik via nested REPLACE+CAST).
- **Status:** Selesai

---

### 39. Posyandu Dokumentasi Bulanan (Automasi DOCX)
- **Deskripsi:** Automasi pembuatan laporan bulanan Posyandu dalam format DOCX. Termasuk logic auto-detect dan koreksi orientasi foto (portrait/landscape).
- **Stack:** Python, python-docx, Pillow
- **Output:** File DOCX laporan Posyandu Februari & Maret 2026
- **Status:** Selesai

---

## RINGKASAN

| Kategori | Jumlah |
|---|---|
| Laravel / Modern Web | 14 |
| Python / AI / ML / Automasi | 9 |
| PHP Legacy (CI3, CI4, WP, Native) | 13 |
| Kompetisi | 1 |
| Data & BI | 2 |
| **Total** | **39** |

| Status | Project |
|---|---|
| Live / Deployed | PulmonaryDetect, Pemetaan Wilayah Palu, UMKM Banggai E-Catalog, Salakan UMKM, Yovan Trans, AUTOMASI_SIGIZI |
| In Progress | UmkmAI, DataNarasi, SMAN 3 Poso Website |
| Selesai / Arsip | Sisanya |

---

*File ini dibuat untuk keperluan konteks AI assistant. Lampirkan di awal setiap sesi chat baru.*
