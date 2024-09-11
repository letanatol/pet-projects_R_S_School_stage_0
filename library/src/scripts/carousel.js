const carouselLine = document.querySelector('.carousel__line');
const carouselButtonPrev = document.querySelector('.carousel__button-prev');
const carouselButtonNext = document.querySelector('.carousel__button-next');
const carouselPagination = document.querySelector('.carousel__pagination');
const paginationButtons = document.querySelectorAll('.pagination-button');
const paginationItem = document.querySelector('.pagination-item');

let position;

carouselPagination.addEventListener('click', event => {
  if (window.innerWidth >= 1200) {
    if (event.target.id === 'pagination-01') {
      carouselLine.style.left = '475px';
    }
    if (event.target.id === 'pagination-02') {
      carouselLine.style.left = '0px';
    }
    if (event.target.id === 'pagination-03') {
      carouselLine.style.left = '-475px';
    }
  } else {
    if (event.target.id === 'pagination-01') {
      carouselLine.style.left = '950px';
    }
    if (event.target.id === 'pagination-02') {
      carouselLine.style.left = '475px';
    }
    if (event.target.id === 'pagination-03') {
      carouselLine.style.left = '0px';
    }
    if (event.target.id === 'pagination-04') {
      carouselLine.style.left = '-475px';
    }
    if (event.target.id === 'pagination-05') {
      carouselLine.style.left = '-950px';
    }
  }
})

carouselButtonNext.addEventListener('click', () => {
  position = window.getComputedStyle(carouselLine);
  let positionLeft = parseInt(position.left);
  console.log(positionLeft);
  if (positionLeft >= 1) {
    carouselLine.style.left = positionLeft - 475 + 'px';

    if (positionLeft === -475) {
      carouselButtonNext.setAttribute('disabled', 'disabled');
    }
  }
})

carouselButtonPrev.addEventListener('click', () => {
  position = window.getComputedStyle(carouselLine);
  let positionRight = parseInt(position.left);
  console.log(positionRight);
  if (positionRight < -474) {
    carouselLine.style.left = positionRight + 475 + 'px';
  }
})