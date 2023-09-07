function openModal(elem) {
  elem.classList.replace('modal_state_close', 'modal_state_open');
  body.classList.add('_scroll');
  blackout.classList.add('_blackout__open');
}

function closeModal(elem) {
  elem.classList.replace('modal_state_open', 'modal_state_close');
  body.classList.remove('_scroll');
  blackout.classList.remove('_blackout__open');
}






export {
  openModal,
  closeModal
}

