'use strict';

const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-model');
const btnsOpenModal = document.querySelectorAll('.show-model');

const openModal = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModal();
  }
});