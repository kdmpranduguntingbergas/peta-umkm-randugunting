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
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('home')?.classList.add('hidden');
  document.getElementById('profile')?.classList.add('hidden');
});

/* ================= DUSUN ================= */
/* MASUK KE HALAMAN DUSUN */
function openDusunPage(dusun) {
  // dusun: krajan | kutan | kebonan
  showPage('dusun-' + dusun);
}

/* KEMBALI KE PROFILE */
function backToProfile() {
  showPage('profile');
}

/* ================= UMKM DETAIL ================= */
/* MASUK KE DETAIL UMKM (1–15) */
function openUmkm(number) {
  // contoh: number = 1 → umkm-1
  showPage('umkm-' + number);
}

/* ================= BACK TO FIRST SCREEN ================= */
function goFirstScreen() {
  // sembunyikan semua page
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('show');
    page.classList.add('hidden');
  });

  // tampilkan splash lagi
  const splash = document.getElementById('splash');
  splash.style.display = 'flex';

  // reset animasi
  splash.classList.remove('fade-out');
}

/* ================= SOSMED ================= */
function openInstagram() {
  window.open(
    'https://www.instagram.com/pemdes.randugunting.bergas?igsh=MjkxbHN5cDk3NWUw&utm_source=qr',
    '_blank'
  );
}



