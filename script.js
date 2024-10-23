// Ambil elemen burger menu dan menu items
const burgerMenu = document.getElementById('burger-menu');
const menuItems = document.getElementById('menu-items');

// Tambahkan event listener untuk klik burger menu
burgerMenu.addEventListener('click', function() {
  // Toggle kelas "active" untuk menampilkan atau menyembunyikan menu
  menuItems.classList.toggle('active');
});

// Tutup menu setelah link di-klik
const navLinks = document.querySelectorAll('.menu-items a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Tutup menu setelah navigasi
    menuItems.classList.remove('active');
  });
});

