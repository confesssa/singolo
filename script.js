const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll(".header-link").forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  });
  