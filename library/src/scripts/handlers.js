import { closeModal, openModal } from './modals.js';

const dropMenu = document.querySelector('.drop-menu');
const loginBtnDropMenu = document.querySelector('.drop-menu__button-login');
const signUpBtnDropMenu = document.querySelector('.drop-menu__button-register');

const signUpBtnlibraryCards = document.getElementById('library-cards-sign-up');
const modalRegister = document.getElementById('modal-register');
const closeBtnRegister = document.querySelector('.modal-register > .modal__button-close');

const logInBtnlibraryCards = document.getElementById('library-cards-log-in');
const modalLogin = document.getElementById('modal-login');
const closeBtnLogin = document.querySelector('.modal-login > .modal__button-close');
const bookBtn = document.querySelectorAll('.favorites__book-button');


// открыть дроп-меню:
userIcon.addEventListener('click', () => {
  if (dropMenu.classList.contains('modal_state_close')) {
    dropMenu.classList.replace('modal_state_close', 'modal_state_open');
  } else {
    dropMenu.classList.replace('modal_state_open', 'modal_state_close');
  }
})

// закрыть дроп-меню на blackout:
blackout.addEventListener('click', () => {
  closeModal(dropMenu);
})

// закрыть дроп-меню на hamburger:
hamburger.addEventListener('click', () => {
  closeModal(dropMenu);
})


// открыть модал регистрации в drop-menu:
signUpBtnDropMenu.addEventListener('click', () => {
  openModal(modalRegister);
})

// открыть модал регистрации в cards:
signUpBtnlibraryCards.addEventListener('click', () => {
  openModal(modalRegister);
})

// закрыть модал регистрации на крестик:
closeBtnRegister.addEventListener('click', () => {
  closeModal(modalRegister);
})

// закрыть модал регистрации через клик на blackout
blackout.addEventListener('click', () => {
  closeModal(modalRegister);
})


// открыть модал login в drop-menu:
loginBtnDropMenu.addEventListener('click', () => {
  openModal(modalLogin);

})
// открыть модал login в cards:
logInBtnlibraryCards.addEventListener('click', () => {
  openModal(modalLogin);
})

// открыть модал login в books:
bookBtn.forEach(button => {
  button.addEventListener('click', () => {
    openModal(modalLogin);
  })
})

// закрыть модал login на крестик:
closeBtnLogin.addEventListener('click', () => {
  closeModal(modalLogin);
})

// закрыть модал login через клик на blackout
blackout.addEventListener('click', () => {
  closeModal(modalLogin);
})





// если клик не по drop-menu, его нужно закрыть
function closeDropMenu(elem) {
  if (elem.target !== userIcon) {
    dropMenu.classList.add("modal_state_close");
  }
}

document.addEventListener("click", closeDropMenu);






