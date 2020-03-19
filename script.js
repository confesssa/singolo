const MENU = document.getElementById('menu');
const TAGS = document.getElementById("tags")
const LAYOUT = document.getElementById("layout");
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');


MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll(".header-link").forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  });


TAGS.addEventListener('click', (event) => {
  TAGS.querySelectorAll(".portfolio-link").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });


LAYOUT.addEventListener('click', (event) => {
  LAYOUT.querySelectorAll(".portfolio-image").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });

    
BUTTON.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  document.getElementById('topic').innerText = subject;
  document.getElementById('description').innerText = subject;
  document.getElementById('message-block').classList.remove('hidden');
})
    
CLOSE_BUTTON.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  document.getElementById('topic').innerText = '';
  document.getElementById('description').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
});
    