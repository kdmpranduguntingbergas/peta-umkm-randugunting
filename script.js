/* ================= PAGE CONTROLLER ================= */
function showPage(id) {
  // sembunyikan semua page
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('show');
    page.classList.add('hidden');
  });

  // tampilkan page tujuan
  const target = document.getElementById(id);
  if (!target) return;

  target.classList.remove('hidden');

  // delay dikit biar transisi kepanggil
  requestAnimationFrame(() => {
    target.classList.add('show');
  });
}

/* ================= SPLASH -> HOME ================= */
function goToHome() {
  const splash = document.getElementById('splash');

  splash.classList.add('fade-out');

  setTimeout(() => {
    splash.style.display = 'none';
    showPage('home');
  }, 600);
}

/* ================= NAV BUTTON ================= */
function goProfile() {
  showPage('profile');
}

function goHome() {
  showPage('home');
}

/* ================= DEFAULT ================= */
// pastikan home & profile dalam state awal
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('home')?.classList.add('hidden');
  document.getElementById('profile')?.classList.add('hidden');
});

function openDusunPage(dusun) {
  alert('Masuk ke halaman UMKM Dusun ' + dusun.toUpperCase());

  // nanti bisa diganti:
  // showPage('umkm-' + dusun);
}

/* ================= UMKM DUSUN ================= */
/* MASUK KE HALAMAN DUSUN */
function openDusunPage(dusun) {
  // contoh: dusun = 'krajan'
  showPage('dusun-' + dusun);
}

/* KEMBALI KE PROFILE DARI HALAMAN DUSUN */
function backToProfile() {
  showPage('profile');
}

/* (OPSIONAL) DETAIL UMKM */
function openDetailUMKM(nama) {
  alert('Buka detail UMKM: ' + nama);
  // nanti bisa:
  // showPage('detail-umkm');
}