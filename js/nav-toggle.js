var body = document.querySelector("body");
var navToggle = document.querySelector(".nav-mob-toggle");
var toggle = () => {
  body.classList.toggle('is-showNavMob');
}

navToggle.addEventListener('click', toggle);