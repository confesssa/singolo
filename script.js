const MENU = document.getElementById('menu');
const TAGS = document.getElementById("tags")
const LAYOUT = document.getElementById("layout");
const MESSAGE = document.getElementById('message-block');
const NAME = document.getElementById('name');
const MAIL = document.getElementById('mail');
const SUBJECT = document.getElementById('subject');
const DESCRIPTION = document.getElementById('description');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');


// MENU-SWITCHING
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll(".header-link").forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  });

// TAG-SWITCHING
TAGS.addEventListener('click', (event) => {
  TAGS.querySelectorAll(".portfolio-link").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    
    let listPortfolio = document.querySelector('.portfolio-items');
    let element = document.querySelector('.portfolio-items > .portfolio-item:first-child');
    listPortfolio.appendChild(element);
    });

// IMAGE-SELECTION
LAYOUT.addEventListener('click', (event) => {
  LAYOUT.querySelectorAll(".portfolio-image").forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });

// POPUP-SHOW
BUTTON.addEventListener('click', () => {
  const topic = document.getElementById('topic').value.toString();
  const description = document.getElementById('description').value.toString();
  document.getElementById('topic').innerText = topic;
  document.getElementById('description').innerText = description;
  document.getElementById('message-block').classList.remove('hidden');

  if(topic !== '') {
    document.getElementById('result-topic').innerText = topic;
  } else {
    document.getElementById('result-topic').innerText = 'Без темы'
  }

  if(description !== '') {
    document.getElementById('result-description').innerText = description;
  } else {
    document.getElementById('result-description').innerText = 'Без описания';
  }

})

// POPUP-HIDDEN
CLOSE_BUTTON.addEventListener('click', () => {
  const topic = document.getElementById('topic').value.toString();
  const description = document.getElementById('description').value.toString();
  document.getElementById('name').innerText = '';
  document.getElementById('mail').innerText = '';
  document.getElementById('topic').innerText = '';
  document.getElementById('description').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
});
    