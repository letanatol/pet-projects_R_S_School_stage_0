const hamburger = document.querySelector('.hamburger');
const navigationList = document.querySelector('.navigation__list');
const body = document.querySelector("body");
const blackout = document.querySelector(".blackout");

  hamburger.addEventListener('click', function () {
    navigationList.classList.toggle('navigation__list-open');
    hamburger.classList.toggle('hamburger-open');
    body.classList.toggle('_scroll');
    blackout.classList.toggle('_blackout__open');
  });

navigationList.addEventListener('click', function () {
  if (navigationList.classList.contains('navigation__list-open')) {
    navigationList.classList.remove('navigation__list-open');
    hamburger.classList.remove('hamburger-open');
    body.classList.remove("_scroll");
    blackout.classList.remove('_blackout__open');
  }
});

blackout.addEventListener('click', function () {
  if (navigationList.classList.contains('navigation__list-open')) {
    navigationList.classList.remove('navigation__list-open');
    hamburger.classList.remove('hamburger-open');
    body.classList.remove("_scroll");
    blackout.classList.remove('_blackout__open');
  }
});