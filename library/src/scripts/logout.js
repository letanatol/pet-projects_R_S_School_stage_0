import { saveUsersData } from "./registration.js";

const userIcon = document.querySelector('.icon');
const dropMenuNoAuthorization = document.getElementById('drop-menu__no-authorization');
const dropMenuAuthorization = document.getElementById('drop-menu__authorization');
const dropMenuTitle = document.getElementById('drop-menu__title');

const dropMenuButtonLogout = document.querySelector('.drop-menu__button-logout');
const findTitle = document.querySelector('.find__title');
const findFormInputName = document.getElementById('find__form-input-name');
const findFormInputNumber = document.getElementById('find__form-input-number');
const findFormButton = document.querySelector('.find__form-button');

const libraryCardsInfo = document.querySelector('.library-cards__info');
const libraryCardsGet = document.querySelector('.library-cards__get');
const libraryCardsVisit = document.querySelector('.library-cards__visit');

dropMenuButtonLogout.addEventListener('click', () => {
  saveUsersData('userCurrentData', null);
  renderUnknownUI();
});

function renderUnknownUI() {
  // 1 меняем инициалы на иконку
  userIcon.innerHTML = '';
  userIcon.classList.remove('header__icon-authorization');
  userIcon.removeAttribute("title");

  // 2 меняем модалку дроп-меню
  dropMenuNoAuthorization.style.display = 'block';
  dropMenuAuthorization.style.display = 'none';
  dropMenuTitle.textContent = '';

    // digital card
  findTitle.textContent = 'Find your Library card';
  findFormInputName.value = '';
  findFormInputNumber.value = '';
  findFormButton.style.display = 'block';
  libraryCardsInfo.style.display = 'none';
  libraryCardsGet.style.display = 'block';
  libraryCardsVisit.style.display = 'none';
}