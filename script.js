const MENU = document.getElementById('menu');
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll(".header-link").forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  });

const PORTFOLIO = document.getElementById("portfolio")
PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll(".portfolio-link").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });

const LAYOUT = document.getElementById("layout");
LAYOUT.addEventListener('click', (event) => {
  LAYOUT.querySelectorAll(".portfolio-image").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });