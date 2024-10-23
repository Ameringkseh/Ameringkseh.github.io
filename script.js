// Navbar toggle for small screens
document.querySelector('.burger-menu').addEventListener('click', function() {
  document.querySelector('.menu-items').classList.toggle('active');
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

