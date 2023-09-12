import { closeModal } from "./modals.js";
import { getUsersData, saveUsersData } from "./registration.js";

const formBuy = document.getElementById('formBuy');
const modalBuy = document.getElementById('modal-buy');


formBuy.addEventListener('submit', submitBuy);

function submitBuy(event) {
  event.preventDefault();
  let userCurrentData = getUsersData('userCurrentData');
  userCurrentData.isCardLibrary = true;
  saveUsersData('userCurrentData', userCurrentData); 
  // todo заменить массив со всеми объектами
  event.target.reset();
  closeModal(modalBuy)
}