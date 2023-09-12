import { getUsersData, saveUsersData } from "./registration.js";

const userIcon = document.querySelector('.icon');
const dropMenuNoAuthorization = document.getElementById('drop-menu__no-authorization');
const dropMenuAuthorization = document.getElementById('drop-menu__authorization');
const dropMenuTitle = document.getElementById('drop-menu__title');

const dropMenuButtonLogout = document.querySelector('.drop-menu__button-logout');

const formFind = document.getElementById('formFind');
const findTitle = document.querySelector('.find__title');
const findFormInputName = document.getElementById('find__form-input-name');
const findFormInputNumber = document.getElementById('find__form-input-number');
const findFormButton = document.querySelector('.find__form-button');

const libraryCardsInfo = document.querySelector('.library-cards__info');
const libraryCardsGet = document.querySelector('.library-cards__get');
const libraryCardsVisit = document.querySelector('.library-cards__visit');
const infoVisitsCard = document.getElementById('infoVisitsCard');
const infoBooksCard = document.getElementById('infoBooksCard');



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

// Регистрация есть, login нет:
// Блок Digital Library Cards. Если ввести имя и номер карты в поля поиска карты и они совпадут с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд
// обработать данные из формы ввода пользователем данных
// получить данные из localStorage
// сравнить есть ли там наш пользователь с такими firstName, lastName и cardNumber
// показать на 10 секунд info панель вместо кнопки

formFind.addEventListener('submit', submitFindCard);

function submitFindCard(event) {
  event.preventDefault();

  const dataForm = new FormData(formFind);
  const dataFormFind = {};
  for (let item of dataForm.entries()) {
    let key = item[0];
    let value = item[1];
    dataFormFind[key] = value;
  }

  const { name, number } = dataFormFind;

  const users = getUsersData('users');

  if (users) {
    const userCurrentData = users.find((item) => {
      const userCurrentName = `${item.firstName} ${item.lastName}` === name;
      const userCurrentNumber = item.cardNumber === number;
      if (userCurrentName && userCurrentNumber) {
        return item;
      }
    })
    if (userCurrentData) {
      const { visits, booksCount } = userCurrentData;

      findFormButton.style.display = 'none';
      libraryCardsInfo.style.display = 'flex';
      infoVisitsCard.innerHTML = visits;
      infoBooksCard.innerHTML = booksCount;

      setTimeout(() => {
        findFormButton.style.display = 'block';
        libraryCardsInfo.style.display = 'none';
      }, 10000);
    } else {
      return;
    }
  }
}