const carouselLine = document.querySelector('.carousel__line');
const carouselButtonPrev = document.querySelector('.carousel__button-prev');
const carouselButtonNext = document.querySelector('.carousel__button-next');
const carouselPagination = document.querySelector('.carousel__pagination');
const paginationButtons = document.querySelectorAll('.pagination-button');
console.log(paginationButtons);
console.log(Array.from(paginationButtons));

// paginationButtons.addEventListener('click', event => {
// console.log(event.target);
// })
// paginationButtons .addEventListener("click", event => console.log(event.currentTarget))

// let position = 0;
// let indexPagination = 0;

// const nextSlider = () => {
//   position += 475;
//   carouselLine.style.left = -position + 'px';
// }

// const prevSlider = () => {
//   position -= 475;
//   carouselLine.style.left = -position + 'px';
// }

// carouselButtonNext.addEventListener('click', nextSlider);
// carouselButtonPrev.addEventListener('click', prevSlider);