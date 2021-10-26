const MENU = document.getElementById("menu");
const TAGS = document.getElementById("tags");
const LAYOUT = document.getElementById("layout");
const MESSAGE = document.getElementById("message-block");

const NAME = document.getElementById("name");
const MAIL = document.getElementById("mail");
const SUBJECT = document.getElementById("subject");
const DESCRIPTION = document.getElementById("description");

const RESULT_TOPIC = document.getElementById("result-topic");
const RESULT_DESCR = document.getElementById("result-description");

const FORM = document.getElementById("form");
const CLOSE_BUTTON = document.getElementById("close-btn");

// MENU-SWITCHING
MENU.addEventListener("click", (event) => {
  MENU.querySelectorAll(".header-link").forEach((el) =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

// TAG-SWITCHING
TAGS.addEventListener("click", (event) => {
  TAGS.querySelectorAll(".portfolio-link").forEach((el) =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");

  let listPortfolio = document.querySelector(".portfolio-items");
  let element = document.querySelector(
    ".portfolio-items > .portfolio-item:first-child"
  );
  listPortfolio.appendChild(element);
});

// IMAGE-SELECTION
LAYOUT.addEventListener("click", (event) => {
  LAYOUT.querySelectorAll(".portfolio-image").forEach((el) =>
    el.classList.remove("active")
  );
  event.target.classList.add("active");
});

// POPUP-SHOW
FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  let topic = SUBJECT.value;
  let description = DESCRIPTION.value;
  RESULT_TOPIC.innerText = topic;
  RESULT_DESCR.innerText = description;
  document.querySelector("#message-block").classList.remove("hidden");

  if (topic !== "") {
    RESULT_TOPIC.innerText = topic;
  } else {
    RESULT_TOPIC.innerText = "No subject";
  }

  if (description !== "") {
    RESULT_DESCR.innerText = description.slice(0, 50);
  } else {
    RESULT_DESCR.innerText = "No description";
  }
  NAME.innerText = "";
  MAIL.innerText = "";
  SUBJECT.innerText = "";
  DESCRIPTION.innerText = "";
});

// POPUP-HIDDEN
CLOSE_BUTTON.addEventListener("click", (event) => {
  event.preventDefault();
  RESULT_TOPIC.innerText = "";
  RESULT_DESCR.innerText = "";
  document.querySelector("#message-block").classList.add("hidden");
});
