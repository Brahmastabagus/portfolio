# DRAFT PORTFOLIO DESIGN BRIEF & SPECIFICATION
**Project**: Bagus Portfolio (`bagus-portfolio`)  
**Document Type**: Draft Design Brief & Candidate Specification (Proposal Pengembangan Frontend)  
**Status**: `DRAFT SPECIFICATION — PENDING USER REVIEW & APPROVAL`  
**Last Updated**: September 2026  

> [!IMPORTANT]
> **Catatan Status Dokumen**:
> Dokumen ini berstatus **DRAFT** dan **BUKAN** merupakan *Source of Truth* resmi sampai disetujui oleh pemilik portfolio. Dokumen ini membedakan secara tegas antara:
> 1. **Preferensi Eksplisit User** (berasal langsung dari `docs/design-raw/portfolio.txt`).
> 2. **Rekomendasi AI** yang ditandai dengan `[RECOMMENDATION — NEEDS APPROVAL]`.
> 3. **Data Konten yang Belum Tersedia** yang ditandai dengan `[CONTENT NEEDED]`.

---

## 1. KLARIFIKASI SUMBER RAW & AUDIT DATA PRIBADI

### 1.1 Status File di `docs/design-raw/`
- **`portfolio.txt`**: Catatan mentah preferensi UI/UX, interaksi spesifik, inspirasi design system (Vercel, Cal.com, Zed.dev, Tailwind CSS, Medium), dan referensi website inspiratif (`chanhdai.com`, `brodin.dev`, `anishshobithps.com`, `siddz.com`, `zippystarter.com`). File ini **tidak memuat data diri pribadi**.
- **`ncdai-chanhdai.com-8a5edab282632443.txt`**: Repositori/kode sumber dari website referensi milik pihak ketiga (Nguyễn Chánh Đại / `chanhdai.com`). Seluruh nama perusahaan (*shadcncraft, Quaric, Simplamo*), sekolah (*University of Science VNUHCM*), metrik, proyek (*React Wheel Picker, ZaDark*), dan sertifikat di dalamnya adalah **milik Chánh Đại, BUKAN data diri Bagus**.
- **`cal.design.md`**: Spesifikasi desain sistem token dari Cal.com sebagai referensi visual.
- **`chanhdai.txt`**: File kosong (0 bytes).

### 1.2 Audit Kebutuhan Konten Pribadi (`[CONTENT NEEDED]`)
Karena tidak ada data pribadi pada catatan mentah, seluruh data berikut **wajib diisi oleh pemilik portfolio** dan **dilarang dikarang oleh AI**:

| Kategori Data | Status Ketersediaan | Deskripsi Kebutuhan Data Asli |
| :--- | :--- | :--- |
| **Nama & Gelar** | `[CONTENT NEEDED]` | Nama lengkap, nama panggilan, inisial / branding monogram. |
| **Positioning Profesional & Jabatan** | `[CONTENT NEEDED]` | Spesialisasi utama (misal: *Frontend Engineer*, *Full-Stack Developer*, *Software Engineer*, dll.). |
| **Bio & Narasi About** | `[CONTENT NEEDED]` | Paragraf perkenalan, filosofi rekayasa, perjalanan karir, dan minat teknis. |
| **Keahlian & Tech Stack** | `[CONTENT NEEDED]` | Daftar bahasa pemrograman, framework, database, dan tools yang benar-benar dikuasai. |
| **Riwayat Pengalaman (Experience)** | `[CONTENT NEEDED]` | Nama perusahaan nyata, posisi, periode bekerja, deskripsi tanggung jawab, dan metrik pencapaian. |
| **Riwayat Pendidikan (Education)** | `[CONTENT NEEDED]` | Nama institusi/universitas/sekolah, gelar, jurusan, tahun kelulusan, dan aktivitas relevan. |
| **Koleksi Proyek (Projects)** | `[CONTENT NEEDED]` | Nama proyek nyata, ringkasan masalah & solusi, tech stack, screenshot/mockup visual, URL live demo & repositori. |
| **Sertifikasi (Certifications)** | `[CONTENT NEEDED]` | Nama lisensi/sertifikat, lembaga penerbit resmi, tanggal terbit, ID kredensial, dan URL verifikasi. |
| **Kontak & Media Sosial** | `[CONTENT NEEDED]` | Alamat email resmi, URL profil GitHub, LinkedIn, Twitter/X, atau media sosial lainnya. |
| **Aset Visual & Foto** | `[CONTENT NEEDED]` | Foto profil avatar beresolusi tinggi dan aset tangkapan layar proyek asli. |
| **Testimonial / Endorsement** | `[CONTENT NEEDED]` | Kutipan rekomendasi rekan kerja / klien (jika ada). |

---

## 2. PEMISAHAN SCOPE: MVP V1 VS FUTURE ENHANCEMENTS

Untuk menjaga kompleksitas implementasi tetap rendah (*low-complexity & low-token*) serta memastikan website dapat dirilis secara cepat dan stabil, fitur dipisahkan secara tegas:

```
+-----------------------------------------------------------------------+
|                               SCOPE SYSTEM                            |
|                                                                       |
|  [ MVP V1: Core Functional & Tactile Essentials ]                     |
|  * Hero & Profile Header                                              |
|  * Quick Overview Strip                                               |
|  * About Section (with Scroll Reveal Paragraph)                       |
|  * Skills Matrix                                                      |
|  * Experience Timeline (with Expandable Accordion)                    |
|  * Education Cards (with Expandable Details)                          |
|  * Projects Gallery (with Spotlight Card & Hover Image)               |
|  * Certifications List                                                |
|  * Contact Section (with Stagger Text on Social Links & Email Copy)   |
|  * Floating Bottom Dock (with Spring Magnification)                  |
|  * Light & Dark Theme Toggle                                          |
|  * Responsive Layout & Basic SEO                                      |
|                                                                       |
|  [ FUTURE ENHANCEMENTS: Post-MVP Polish & Rich Easter Eggs ]           |
|  * Matter.js Gravity Tech Stack Footer                                |
|  * Interactive 404 Screensaver Engine                                 |
|  * Custom Expanding Blob Cursor                                       |
|  * GitHub Live Contribution Graph Visualization                       |
|  * Audio Name Pronunciation & Sound Effects System                    |
|  * Profile Preview Popover on Author Name                             |
|  * Dynamic Rotating Flip Sentences                                    |
|  * Advanced Initial Loading Splash Screen                             |
|  * Real-time Local Clock & Timezone Tracking                          |
|  * Digital vCard & Calendar Booking Integration                       |
+-----------------------------------------------------------------------+
```

---

## 3. SPESIFIKASI MVP V1

### 3.1 Navbar: Floating Bottom Dock
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada navbar: ada di bawah dan effect dock"*).
- **Penempatan**: Mengambang di bagian bawah tengah layar (*fixed bottom center*), dengan padding aman `bottom-5`.
- **Desain Kontainer**: Bentuk pill lonjong (`rounded-full`), efek kaca halus (`backdrop-blur-md bg-background/80 border border-border/60 shadow-lg`).
- **Interaksi Dock Magnification**:
  - Saat kursor mendekati ikon, ikon membesar secara proporsional dengan animasi pegas (*spring animation*).
  - Khusus desktop (`pointer: fine`); dinonaktifkan pada perangkat layar sentuh (`pointer: coarse`) agar scrolling mobile tetap natural.
- **Menu Items MVP**:
  1. `Home` -> Scroll ke Hero
  2. `About` -> Scroll ke `#about`
  3. `Experience` -> Scroll ke `#experience`
  4. `Projects` -> Scroll ke `#projects`
  5. `Certifications` -> Scroll ke `#certifications`
  6. `Contact` -> Scroll ke `#contact`
  7. `Theme Switcher` (Light / Dark)
- **Tooltip**: Label teks mini muncul di atas ikon saat di-hover.

### 3.2 Hero & Profile Header
- **Komponen**:
  - Avatar lingkaran bersih dengan border halus. Aset: `[CONTENT NEEDED]`.
  - Status ketersediaan: Pill badge statis sederhana (misal: `"Available for opportunities"`).
  - Nama Lengkap & Gelar: Teks display tegas. Data: `[CONTENT NEEDED]`.
  - Satu baris ringkasan spesialisasi / tagline profesional: `[CONTENT NEEDED]`.

### 3.3 Quick Overview Strip
- **Komponen Ringkas**:
  - Lokasi / Domisili: `[CONTENT NEEDED]`.
  - Status Pekerjaan / Ketersediaan: `[CONTENT NEEDED]`.
  - Akses cepat tombol salin email instan.

### 3.4 About Section (dengan Scroll Reveal Paragraph)
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"ada Scroll Reveal Paragraph"*).
- **Interaksi Scroll Reveal**:
  - Paragraf perkenalan disusun dengan tipografi berjarak nyaman (*editorial style*).
  - Kata-kata di dalam paragraf bertransisi dari opasitas rendah (redup `opacity-30`) menjadi kontras penuh (`opacity-100`) seiring pengguna melakukan scroll ke bawah.
  - Menggunakan Motion/CSS scroll-driven animation berbobot ringan (*low computational overhead*).
- **Konten Narasi**: Menjelaskan latar belakang teknis, fokus rekayasa perangkat lunak, dan pendekatan problem solving. Teks narasi: `[CONTENT NEEDED]`.

### 3.5 Skills Matrix
- **Penyajian**: Grid terstruktur yang rapi dan mudah dipindai (*scan-friendly*) untuk kebutuhan recruiter.
- **Kategori Pengelompokan**:
  - Frontend Ecosystem
  - Backend & Database
  - Tools, DevOps & Architecture
  - UI/UX & Design Systems
- **Daftar Teknologi Asli**: `[CONTENT NEEDED]`.

### 3.6 Work Experience (dengan Expandable Timeline)
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada experience: ada timeline yang expand"*).
- **Struktur Linimasa**:
  - Garis vertikal tipis yang menghubungkan titik milestone perusahaan.
  - Setiap posisi kerja memuat: Nama Perusahaan, Jabatan/Role, Periode Kerja, Tipe Pekerjaan.
- **Interaksi Accordion Expand**:
  - Kartu pekerjaan terkini terbuka secara default, pekerjaan terdahulu tertutup rapi.
  - Klik pada kartu membuka detail tanggung jawab, pencapaian berbobot (*achievements*), dan tag teknologi yang dipakai.
- **Data Perusahaan & Pengalaman Asli**: `[CONTENT NEEDED]`.

### 3.7 Education / Sekolah (dengan Expandable Card)
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada sekolah: card expand"*).
- **Struktur Kartu**:
  - Nama Institusi Pendidikan / Universitas, Jenjang & Jurusan, Periode Belajar.
- **Interaksi Expand**:
  - Kartu dapat diklik untuk memperluas informasi mata kuliah relevan (*relevant coursework*), capaian akademik, atau proyek akhir.
- **Data Sekolah & Riwayat Pendidikan Asli**: `[CONTENT NEEDED]`.


### 3.8 Projects Section (Spotlight Cards & Hover Image)
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada Card: ada spotlight card"* dan *"Pada Card project: hover image"*).
- **Proyek Terpilih untuk MVP (Disetujui User)**:
  1. **Brofesional User App** (Flagship Production — Edutech mobile WebView, 5,000+ users, SSE AI Chatbot Brodi, optimasi API ~70% payload reduction).
  2. **SIKOKU Psychotest Platform** (Client Work — Sertifikat Hak Cipta/HKI Kemenkumham, gamified psychometric test).
  3. **TerbangIn** (Binar Academy Final Project — Flight ticket booking system, hard-skill score 4.9/5).
  4. **Desa Wisata Melung** (Skripsi & Riset — Sistem Informasi Desa Wisata Melung, publikasi jurnal, React + Express).
- **Aturan Repositori Privat & Publik**:
  - Seluruh fakta, metrik, teknologi, dan deskripsi bersumber murni dari `docs/content-sources/PROJECTS.md`.
  - Untuk proyek dengan repositori privat (seperti *Brofesional*), dilarang keras membuat tombol "Source Code" palsu atau tautan buntu (`href="#"`). Tampilkan link live/produk hanya jika tersedia dan aman.
- **Spotlight Card Interaction**:
  - Lapisan gradien radial halus mengikuti koordinat mouse `(x, y)` pada permukaan dan border kartu.
- **Hover Image Interaction**:
  - Menampilkan thumbnail/mockup visual proyek dengan zoom halus (`scale-105`) dan transisi pencahayaan overlay presisi.

### 3.9 Certifications List
- **Tampilan**: Grid kartu sertifikasi terverifikasi.
- **Sumber Konten**: `docs/content-sources/CERTIFICATIONS.md` dan `ACHIEVEMENTS.md` (BNSP Junior Web Developer, AWS Academy Cloud Architecting, HKI SIKOKU & TEKNOKO, Binar Academy, dan Juara Web Design PRIMA).
- **Elemen per Kartu**: Nama sertifikasi, lembaga penerbit, tanggal terbit, ID sertifikat, dan tombol link verifikasi eksternal.

### 3.10 Contact Section (Stagger Text pada Social Links)
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada social media: ada efek stagger textnya"*).
- **Stagger Text Interaction**:
  - Teks link media sosial (LinkedIn, GitHub) dipecah menjadi karakter individual yang melonjak bertingkat (*waterfall delay*) saat kursor melintas.
- **Email & Direct Action**:
  - Tombol salin alamat email satu klik dengan feedback visual *"Copied!"*. (Alamat email publik akan disediakan user secara terpisah).
  - WhatsApp / nomor telepon **tidak diperlukan** untuk MVP.

### 3.11 Light / Dark Theme
- **Status Keputusan**: **Disetujui User** (`System Preference` default).
- **Implementasi**:
  - Mengikuti pengaturan sistem operasi pengunjung secara otomatis (*System Preference*).
  - Pengunjung tetap dapat mengganti mode secara manual ke Light Mode atau Dark Mode via toggle di Floating Bottom Dock.
  - Transisi warna halus dan bebas kedipan (*zero flash on load*).

### 3.12 Responsive Design & Aksesibilitas (A11y)
- Layout fleksibel untuk resolusi mobile (320px+), tablet, hingga desktop (1200px+).
- *Touch target* minimal 44x44px pada layar sentuh.
- Mendukung navigasi keyboard penuh (`Tab`, `Enter`, `Space`, `Esc`).
- Menghormati pengaturan pengguna `prefers-reduced-motion` (animasi dock magnification dan stagger text otomatis dialihkan ke transisi instan).

### 3.13 SEO Dasar
- Semantic HTML (`<main>`, `<header>`, `<section>`, `<article>`, `<nav>`).
- Meta title, meta description, favicon, dan OpenGraph tag dasar.

### 3.14 Bahasa Pengantar Konten (Language)
- **Status Keputusan**: **Disetujui User** (Full **English**).
- Seluruh teks dan copy pada antarmuka portfolio MVP disajikan dalam bahasa Inggris profesional mengikuti standar `docs/content-sources/`.

---

## 4. SPESIFIKASI FUTURE ENHANCEMENTS (POST-MVP)

Fitur-fitur berikut **tetap dipertahankan dalam perancangan**, namun dialokasikan untuk tahap pengerjaan setelah MVP V1 selesai:

### 4.1 Interactive Footer: Gravity Tech Stack
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada Footer: terdapat gravity yang berisi techstack"*).
- **Rencana Post-MVP**: Simulasi fisika 2D (Matter.js / Canvas 2D) di mana badge teknologi berjatuhan dan dapat dilempar/ditarik.
- **Alasan Penundaan ke Post-MVP**: Membutuhkan bundle library fisika terpisah agar tidak membebani performa awal halaman.

### 4.2 404 Page: Interactive Screensaver
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada 404: terdapat screensaver"*).
- **Rencana Post-MVP**: Halaman error 404 yang menampilkan animasi logo 404 membal di dinding layar (*bouncing screensaver*).

### 4.3 Custom Cursor: Expanding Blob
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Pada cursor: expand blob saat hover button"*).
- **Rencana Post-MVP**: Elemen kursor cair kustom yang mengikuti pointer mouse dan mengembang elastis saat melintasi tombol/link di desktop.

### 4.4 GitHub Live Contribution Graph
- **Sumber Ketentuan**: Preferensi Eksplisit User (*"Ada graph github"*).
- **Rencana Post-MVP**: Komponen visualisasi kontribusi komit GitHub yang terhubung ke API publik GitHub.

### 4.5 Fitur Mikro-Interaksi Tambahan
- **Loading Transition**: Animasi splash loading di awal (*"Ada loading"*).
- **Pronunciation Audio**: Tombol audio pelafalan nama dengan pemutar suara.
- **Profile Preview Popover**: Popover mini kartu profil saat hover pada nama user (*"ada preview link di nama saya"*).
- **Dynamic Rotating Sentences**: Teks berganti otomatis di bawah nama profil.
- **Real-time Local Clock**: Jam live berdasarkan zona waktu lokal.
- **Sound Effects (Micro-Sounds)**: Efek audio klik dan hover bertema *soundcn*.
- **vCard & Calendar Booking**: Endpoint kontak digital dan integrasi Cal.com.

---

## 5. KEPUTUSAN DESAIN YANG TELAH DISETUJUI USER (`[APPROVED DECISIONS]`)

Seluruh butir rekomendasi awal telah ditinjau dan **secara resmi diputuskan oleh user**:

### 5.1 Default Theme: System Preference
- **Keputusan**: Menggunakan **System Preference** sebagai default. Pengunjung dapat mengganti manual via toggle di dock.

### 5.2 Skema Warna: Monokromatik Zinc + Restrained Accents
- **Keputusan**:
  - Fondasi utama monokromatik Zinc / Netral (hitam, abu-abu, putih).
  - *Electric Blue* (`#3B82F6`) digunakan secara sangat hemat (*restrained*) hanya untuk active state, focus, tautan, atau interaksi kunci.
  - *Emerald Green* (`#10B981`) hanya untuk status semantik (ketersediaan/success).
  - Tampilan utama tetap terjaga bersih monokrom.

### 5.3 Pilihan Font & Tipografi: Geist Family
- **Keputusan**:
  - `Geist Sans` untuk display, headings, dan body text.
  - `Geist Mono` untuk tanggal, metadata, tech tags tertentu, ID kredensial, dan elemen monospace.
  - Tidak menambahkan font Inter, Cal Sans, atau JetBrains Mono untuk MVP.

### 5.4 Bahasa Konten: English
- **Keputusan**: Menggunakan **English** sebagai bahasa pengantar utama di seluruh portfolio MVP.

### 5.5 Featured Projects: 4 Proyek Terpilih
- **Keputusan**: Brofesional User App, SIKOKU Psychotest Platform, TerbangIn, dan Desa Wisata Melung.

### 5.6 Library Tambahan MVP: lucide-react & motion
- **Keputusan**: Disetujui memasang `lucide-react` dan `motion`. Menolak dependensi berat lainnya (Matter.js dll.) pada tahap MVP.

---

## 6. STRATEGI TEKNOLOGI & DEPENDENSI (LOW-COMPLEXITY MVP)

### Dependensi untuk MVP V1:
1. `next` (v16.3+ / App Router) & `react` (v19) — *Tersedia di codebase*.
2. `tailwindcss` (v4) — *Tersedia di codebase*.
3. `lucide-react` — *Disetujui untuk dipasang pada tahap implementasi*.
4. `motion` (Framer Motion v12) — *Disetujui untuk dipasang pada tahap implementasi*.

### Dependensi yang DITUNDA sampai Post-MVP:
- `matter-js` (Ditunda hingga pengerjaan Gravity Tech Stack Footer).
- `canvas-confetti` / Sound library (Ditunda hingga Post-MVP).

---

## 7. MATRIKS KEPUTUSAN & PERSETUJUAN FINAL MVP

| Elemen / Fitur | Sumber Asal | Scope | Status Persetujuan |
| :--- | :--- | :--- | :--- |
| **Floating Bottom Dock** | Catatan Mentah (`portfolio.txt` #10) | MVP V1 | **Disetujui User** |
| **Dock Magnification** | Catatan Mentah (`portfolio.txt` #10) | MVP V1 | **Disetujui User** |
| **Scroll Reveal Paragraph** | Catatan Mentah (`portfolio.txt` #5) | MVP V1 | **Disetujui User** |
| **Expandable Experience Timeline** | Catatan Mentah (`portfolio.txt` #7) | MVP V1 | **Disetujui User** |
| **Expandable Education Cards** | Catatan Mentah (`portfolio.txt` #8) | MVP V1 | **Disetujui User** |
| **Spotlight Project Cards** | Catatan Mentah (`portfolio.txt` #4) | MVP V1 | **Disetujui User** |
| **Hover Image Preview pada Project** | Catatan Mentah (`portfolio.txt` #3) | MVP V1 | **Disetujui User** |
| **Stagger Text pada Social Links** | Catatan Mentah (`portfolio.txt` #9) | MVP V1 | **Disetujui User** |
| **Default Theme System Preference** | Rekomendasi AI -> Ditentukan User | MVP V1 | **Disetujui User** |
| **Warna Aksen Monokrom + Restrained Blue/Emerald** | Rekomendasi AI -> Ditentukan User | MVP V1 | **Disetujui User** |
| **Tipografi Geist Sans & Geist Mono** | Rekomendasi AI -> Ditentukan User | MVP V1 | **Disetujui User** |
| **Bahasa Konten (English)** | Rekomendasi AI -> Ditentukan User | MVP V1 | **Disetujui User** |
| **4 Featured Projects** | Rekomendasi AI -> Ditentukan User | MVP V1 | **Disetujui User** |
| **Library `lucide-react` & `motion`** | Rekomendasi AI -> Ditentukan User | MVP V1 | **Disetujui User** |
| **Gravity Tech Stack Footer** | Catatan Mentah (`portfolio.txt` #1) | Future | **Post-MVP** |
| **404 Screensaver** | Catatan Mentah (`portfolio.txt` #2) | Future | **Post-MVP** |
| **Custom Blob Cursor** | Catatan Mentah (`portfolio.txt` #6) | Future | **Post-MVP** |
| **GitHub Contribution Graph** | Catatan Mentah (`portfolio.txt` #11) | Future | **Post-MVP** |
| **Initial Loading Transition** | Catatan Mentah (`portfolio.txt` #12) | Future | **Post-MVP** |
| **Author Name Preview Link** | Catatan Mentah (`portfolio.txt` #5) | Future | **Post-MVP** |

---

## 8. LANGKAH SELANJUTNYA
1. Pemilik portfolio meninjau draf dokumen ini.
2. Memberikan persetujuan atau arahan revisi terhadap butir-butir `[RECOMMENDATION — NEEDS APPROVAL]`.
3. Menyediakan data diri dan portofolio nyata untuk mengisi bagian `[CONTENT NEEDED]`.
4. Setelah disetujui, dokumen ini diubah statusnya menjadi spesifikasi resmi untuk memulai tahap implementasi kode MVP V1.
