import { closeModal, openModal } from './modals.js';
import { getUsersData, saveUsersData } from './registration.js';

const blackout = document.querySelector(".blackout");
const hamburger = document.querySelector('.hamburger');
const userIcon = document.querySelector('.icon');
const dropMenu = document.querySelector('.drop-menu');
const dropMenuTitle = document.querySelector('.drop-menu__title');

const signUpBtnDropMenu = document.querySelector('.drop-menu__button-register');
const modalRegisterButtonLogin = document.querySelector('.modal-register__button-login');
const signUpButtonLibraryCards = document.getElementById('library-cards-sign-up');
const modalRegister = document.getElementById('modal-register');
const closeBtnRegister = document.querySelector('.modal-register > .modal__button-close');

const loginBtnDropMenu = document.querySelector('.drop-menu__button-login');
const modalLoginButtonRegister = document.querySelector('.modal-login__button-register');
const loginButtonLibraryCards = document.getElementById('library-cards-log-in');
const modalLogin = document.getElementById('modal-login');
const closeBtnLogin = document.querySelector('.modal-login > .modal__button-close');


const favoritesBooks = document.getElementById('favorites-books');
const modalBuy = document.getElementById('modal-buy');
const closeBtnModalBuy = document.querySelector('.modal-buy > .modal-buy__button-close');
const bookButtonOwn = document.querySelector('.book-button-own');


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

// открыть модал регистрации в login modal:
modalLoginButtonRegister.addEventListener('click', () => {
  openModal(modalRegister);
  modalLogin.classList.replace('modal_state_open', 'modal_state_close');
})

// открыть модал регистрации в cards:
signUpButtonLibraryCards.addEventListener('click', () => {
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

// открыть модал login в modal Register:
modalRegisterButtonLogin.addEventListener('click', () => {
  openModal(modalLogin);
  modalRegister.classList.replace('modal_state_open', 'modal_state_close');
})

// открыть модал login в cards:
loginButtonLibraryCards.addEventListener('click', () => {
  openModal(modalLogin);
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

// кнопка buy в favorites__book // существует data-Btn-Id
favoritesBooks.addEventListener('click', event => {
  if (event.target.classList.contains('favorites__book-button')) {
    const userCurrentData = getUsersData('userCurrentData');

    if (userCurrentData && userCurrentData.isCardLibrary === true) {

      event.target.classList.add('book-button-own');
      event.target.innerHTML = "Own";
      // event.target.setAttribute('disabled', 'disabled');
      let selectedBook = `${event.target.parentElement.children[1].textContent}, ${event.target.parentElement.children[2].textContent.slice(3)}`;

      if (userCurrentData.books) {
        userCurrentData.books.push(selectedBook);
      } else {
        userCurrentData.books = [selectedBook];
      }

      if (userCurrentData.bookId) {
        userCurrentData.bookId.push(event.target.parentElement.id);
      } else {
        userCurrentData.bookId = [event.target.parentElement.id];
      }

      saveUsersData('userCurrentData', userCurrentData);
    } else if (userCurrentData) {
      openModal(modalBuy);
    } else {
      openModal(modalLogin);
    }
  }
})

//3 закрыть модалку  buy card в books:
blackout.addEventListener('click', () => {
  closeModal(modalBuy);
})

//3 закрыть модалку buy card на крестик:
closeBtnModalBuy.addEventListener('click', () => {
  closeModal(modalBuy);
})