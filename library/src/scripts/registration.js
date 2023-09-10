import { closeModal, openModal } from "./modals.js";

const formRegister = document.getElementById('form-register');
const modalLogin = document.getElementById('modal-login');
const modalRegister = document.getElementById('modal-register');
const userIcon = document.querySelector('.icon');
const dropMenuNoAuthorization = document.getElementById('drop-menu__no-authorization');
const dropMenuAuthorization = document.getElementById('drop-menu__authorization');
const dropMenuTitle = document.getElementById('drop-menu__title');
const bookBtn = document.querySelectorAll('.favorites__book-button');
const modalBuy = document.getElementById('modal-buy');
const closeBtnModalBuy = document.querySelector('.modal-buy > .modal-buy__button-close');
const modalBuyButton = document.querySelector('.modal-buy__button'); //todo
const dropMenuButtonProfile = document.querySelector('.drop-menu__button-profile');
const modalProfile = document.getElementById('modal-profile');
const modalProfileInitials = document.querySelector('.modal-profile__initials');
const modalProfileSurname = document.querySelector('.modal-profile__surname');
const infoVisits = document.getElementById('infoVisits');
const infoBooks = document.getElementById('infoBooks');
const modalProfileCardNumber = document.getElementById('modal-profile-card-number');
const closeBtnModalProfile = document.getElementById('modal-profile__button-close');
const dropMenuButtonLogout = document.querySelector('.drop-menu__button-logout');
const findTitle = document.querySelector('.find__title');
const findFormInputName = document.getElementById('find__form-input-name');
const findFormInputNumber = document.getElementById('find__form-input-number');
const findFormButton = document.querySelector('.find__form-button');

const libraryCardsInfo = document.querySelector('.library-cards__info');
const libraryCardsGet = document.querySelector('.library-cards__get');
const libraryCardsVisit = document.querySelector('.library-cards__visit');
const infoVisitsCard = document.getElementById('infoVisitsCard');
const infoBooksCard = document.getElementById('infoBooksCard');
const libraryCardsButtonProfile = document.getElementById('get-button-profile');


formRegister.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  const formData = new FormData(formRegister);
  formData.set('isAuthorized', 'true');
  formData.set('isCardLibrary', 'false');
  formData.set('visits', 1);
  formData.set('books', []);
  formData.set('booksCount', 0);

  const cardNumber = getCardNumber();
  formData.set('cardNumber', cardNumber);

  const userCurrentData = {};
  for (let item of formData.entries()) {
    let key = item[0];
    let value = item[1];
    userCurrentData[key] = value;
  }

  saveUsersData('userCurrentData', userCurrentData); // использование данных для renderAuthorizedUI

  const users = getUsersData('users');
  if (users) {
    saveUsersData('users', [...users, userCurrentData]);
  } else {
    saveUsersData('users', [userCurrentData]);
  }

  closeModal(modalRegister);
  renderAuthorizedUI();
}

function renderAuthorizedUI() {
  const userCurrentData = getUsersData('userCurrentData');
  const { firstName, lastName, cardNumber, visits, booksCount } = userCurrentData;

  // 1 меняем иконку на инициалы
  createIconInitials(firstName, lastName);

  // 2 меняем модалку дроп-меню
  dropMenuNoAuthorization.style.display = 'none';
  dropMenuAuthorization.style.display = 'block';
  dropMenuTitle.textContent = cardNumber;

  // 3 открыть модалку  buy card в books:
  bookBtn.forEach(button => {
    button.addEventListener('click', () => {
      openModal(modalBuy);
    })
  })

  //3 закрыть модалку  buy card в books:
  blackout.addEventListener('click', () => {
    closeModal(modalBuy);
  })

  //3 закрыть модалку buy card на крестик:
  closeBtnModalBuy.addEventListener('click', () => {
    closeModal(modalBuy);
  })

  //4 открыть модалку profile
  dropMenuButtonProfile.addEventListener('click', () => {
    openModal(modalProfile);
  })

  //4 открыть модалку profile в libraryCard
  libraryCardsButtonProfile.addEventListener('click', () => {
    openModal(modalProfile);
  })

  createIconInitialsForProfile(firstName, lastName);
  infoVisits.innerHTML = visits;
  infoBooks.innerHTML = booksCount;
  modalProfileCardNumber.innerHTML = cardNumber;

  //4 закрыть модалку profile на крестик:
  closeBtnModalProfile.addEventListener('click', () => {
    closeModal(modalProfile);
  })

  //4 закрыть модалку profile:
  blackout.addEventListener('click', () => {
    closeModal(modalProfile);
  })

  // 5 digital card
  findTitle.textContent = 'Your Library card';
  findFormInputName.value = firstName;
  findFormInputNumber.value = cardNumber;
  infoVisitsCard.innerHTML = visits;
  infoBooksCard.innerHTML = booksCount;
  findFormButton.style.display = 'none';
  libraryCardsInfo.style.display = 'flex';
  libraryCardsGet.style.display = 'none';
  libraryCardsVisit.style.display = 'block';

  // log Out
  // dropMenuButtonLogout.addEventListener('click', () => {
  //   let userLogOut = getUserData(); //todo delete!!!!!!!!!!!!!!!!!!!!!!!!!
  //   userLogOut.isAuthorized = false;
  //   localStorage.setItem('currentUser', JSON.stringify(userLogOut));
  //   renderUnknownUI();
  // });

}

// function renderUnknownUI() {
//   // 1 меняем инициалы на иконку
//   userIcon.innerHTML = '';
//   userIcon.classList.remove('header__icon-authorization');
//   userIcon.removeAttribute("title");

//   // 2 меняем модалку дроп-меню
//   dropMenuNoAuthorization.style.display = 'block';
//   dropMenuAuthorization.style.display = 'none';
//   dropMenuTitle.textContent = '';

//   // 3 открыть modalLogin в books:
//   bookBtn.forEach(button => {
//     button.addEventListener('click', () => {
//       openModal(modalLogin);
//     })
//   })
//   // 4 закрыть модалку modalLogin в books:
//   blackout.addEventListener('click', () => {
//     closeModal(modalBuy);
//   })
//   // закрыть модалку modalLogin на крестик:
//   closeBtnModalBuy.addEventListener('click', () => {
//     closeModal(modalBuy);
//   })
//   // digital card
//   findTitle.textContent = 'Find your Library card';
//   findFormInputName.value = '';
//   findFormInputNumber.value = '';
//   findFormButton.style.display = 'block';
//   libraryCardsInfo.style.display = 'none';
//   libraryCardsGet.style.display = 'block';
//   libraryCardsVisit.style.display = 'none';
// }


export function saveUsersData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getUsersData(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getCardNumber() {
  let min = Math.ceil(100_000_000);
  let max = Math.floor(999_999_999);
  let cardNumber = (Math.floor(Math.random() * (max - min + 1)) + min).toString('16').toUpperCase();
  while (cardNumber.length < 9) {
    cardNumber = '0' + cardNumber;
  };
  return cardNumber;
}

export function createIconInitials(firstName, lastName) {
  userIcon.innerHTML = firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
  userIcon.classList.add('header__icon-authorization');
  userIcon.title = `${firstName} ${lastName}`;
  console.log('я выполнилась');
}

export function createIconInitialsForProfile(firstName, lastName) {
  modalProfileInitials.innerHTML = firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
  modalProfileSurname.innerHTML = `${firstName} ${lastName}`;
}

//! window onload
// function updatePage() {
//   if (isUserAuthorized) {
//     renderAuthorizedUI();
//   } else {
//     renderUnknownUI();
//   }
// }

// updatePage();
