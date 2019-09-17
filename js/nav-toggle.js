// get the nav-toggle button
// add an event to it that adds a css class to the body of the document
// get the nav-toggle-cancel button
// add an event to it that removes the nav-mobile class from the body
var body = document.querySelector("body");
var navToggle = document.querySelector(".nav-mob-toggle");
var toggle = () => {
  body.classList.toggle('is-showNavMob');
}

navToggle.addEventListener('click', toggle);