import { closeModal } from "./modals.js";
import { getUsersData, saveUsersData } from "./registration.js";

const formBuy = document.getElementById('formBuy');
const modalBuy = document.getElementById('modal-buy');


formBuy.addEventListener('submit', submitBuy);

function submitBuy(event) {
  event.preventDefault();

  let userCurrentData = getUsersData('userCurrentData'); // получили из хранилища текущего user
  userCurrentData.isCardLibrary = true; // заменили у него данные
  saveUsersData('userCurrentData', userCurrentData); // сохранили его в хранилище с измененными данными
  event.target.reset();
  closeModal(modalBuy)
}