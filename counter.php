<?php
/**
 * counter.php  —  Self-hosted view counter
 * =========================================
 * Menyimpan hitungan kunjungan di file lokal "views.json"
 * di server hosting sendiri. Tidak memerlukan API pihak ketiga.
 *
 * Cara kerja:
 *   1. Browser memanggil counter.php
 *   2. PHP membaca angka dari views.json
 *   3. PHP menambahkan +1, menyimpan kembali ke views.json
 *   4. PHP mengembalikan angka terbaru ke browser
 *
 * Upload HANYA file ini ke root direktori hosting (public_html).
 * File views.json akan dibuat otomatis oleh script ini.
 */

header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Access-Control-Allow-Origin: *');

// --- Path file penyimpanan hitungan ---
$DATA_FILE = __DIR__ . '/views.json';

// --- Baca hitungan saat ini ---
$count = 0;
if (file_exists($DATA_FILE)) {
    $json  = file_get_contents($DATA_FILE);
    $data  = json_decode($json, true);
    $count = isset($data['count']) ? (int)$data['count'] : 0;
}

// --- Tambah +1 per kunjungan ---
$count++;

// --- Simpan kembali ke file ---
$saved = file_put_contents(
    $DATA_FILE,
    json_encode(['count' => $count], JSON_PRETTY_PRINT),
    LOCK_EX  // Kunci file agar aman saat banyak pengunjung bersamaan
);

// --- Kembalikan ke browser ---
if ($saved === false) {
    // Gagal tulis (mungkin masalah permission folder)
    http_response_code(500);
    echo json_encode(['count' => $count, 'error' => 'write_failed']);
    exit;
}

echo json_encode(['count' => $count]);
