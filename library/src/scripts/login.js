import { closeModal, openModal } from "./modals.js";
import { getUsersData, renderAuthorizedUI, saveUsersData } from "./registration.js";

const formLogin = document.getElementById('form-login');
const modalLogin = document.getElementById('modal-login');
const modalRegister = document.getElementById('modal-register');

formLogin.addEventListener('submit', submitLogin);

function submitLogin(event) {
  event.preventDefault();
  const formData = new FormData(formLogin);

  const userCurrentFormLogin = {};
  for (let item of formData.entries()) {
    let key = item[0];
    let value = item[1];
    userCurrentFormLogin[key] = value;
  }

  const { loginEmail, loginPassword } = userCurrentFormLogin;
  const users = getUsersData('users');
  const userCurrentData = users.find(item => {
    return item.password === loginPassword
  });

  if (userCurrentData) {
    const { email, password, cardNumber } = userCurrentData;
    if (loginEmail === email || loginEmail === cardNumber && loginPassword === password) {
      userCurrentData.visits = Number(userCurrentData.visits) + 1;
      saveUsersData('userCurrentData', userCurrentData)

    } else {
      openModal(modalRegister);
      closeModal(modalLogin);
    }
  } else {
    openModal(modalRegister);
    closeModal(modalLogin);
  }


  event.target.reset();
  closeModal(modalLogin);
  renderAuthorizedUI();
}