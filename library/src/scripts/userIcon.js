const userIcon = document.querySelector('.icon');

function changeIconInitials(firstName, lastName) {
  userIcon.innerHTML = firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
  userIcon.classList.add('header__icon-authorization');
  userIcon.title = `${firstName} ${lastName}`;
}


const registerEmail = document.getElementById('register-password');

// registerEmail.addEventListener('input', validationEmail);

// function validationEmail(elem) {
//   const reg = new RegExp('^ ([a - z0 -9_ -] +\.)* [a - z0 -9_ -] + @[a - z0 -9_ -] + (\.[a - z0 -9_ -] +)*\.[a - z]{ 2, 6 } $');
//   if (reg.test(elem.value)) {
//     elem.style.border = '2px solid rgb(0, 196, 0)';
//   } else {
//     elem.style.border = '2px solid red';
//   }
// }

