// 'use strict';

const modals = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll(".show-modal");


const openModal = function () {
    modals.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modals.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modals.classList.contains('hidden')) {
        closeModal();
    }
});
modals.addEventListener('click', function () {
    let show = document.querySelector('.hidden')
    if (show.style.display === "none")
        show.style.display = "block";
    else
        show.style.display = "none";

});





