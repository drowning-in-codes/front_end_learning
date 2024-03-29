"use strict";

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});

// MOBILE NAV TOGGLE
const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]"),
];

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};
const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElements(navTogglers, "click", toggleNav);

addEventOnElements(navLinks, "click", closeNav);

//HEADER
const header = document.querySelector("[data-header]");
const activeElementOnScroll = function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElementOnScroll);

// TEXT ANIMATION FOR HERO SECTION

const letterBoxes = document.querySelectorAll("[data-letter-effect]");
let activateLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {
  for (let i = 0; i < letterBoxes.length; i++) {
    let letterAnimationDelay = 0;
    const letters = letterBoxes[i].textContent.trim();
    letterBoxes[i].textContent = "";
    for (let j = 0; j < letters.length; j++) {
      const span = document.createElement("span");
      span.style.animationDelay = `${letterAnimationDelay}s`;

      if (i === activateLetterBoxIndex) {
        span.classList.add("in");
      } else {
        span.classList.add("out");
      }

      span.textContent = letters[j];
      if (letters[j] === "") {
        span.classList.add("space");
      }
      letterBoxes[i].appendChild(span);
      if (j >= letters.length - 1) {
        break;
      }
      letterAnimationDelay += 0.05;
    }
    if (i === activateLetterBoxIndex) {
      totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
    }
    if (i === lastActiveLetterBoxIndex) {
      letterBoxes[i].classList.add("active");
    } else {
      letterBoxes[i].classList.remove("active");
    }
  }

  setTimeout(function () {
    lastActiveLetterBoxIndex = activateLetterBoxIndex;
    activateLetterBoxIndex >= letterBoxes.length - 1
      ? (activateLetterBoxIndex = 0)
      : activateLetterBoxIndex++;
    setLetterEffect();
  }, totalLetterBoxDelay * 1000 + 3000);
};

window.addEventListener("load", setLetterEffect);
