const editBtn = document.querySelector('.profile__edit-button');
const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form_name');
const jobInput = document.querySelector('.popup__form_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

function formSubmitHandler (event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popUp.classList.remove('popup_opened');
}

editBtn.addEventListener('click', ()=> {
    popUp.classList.add('popup_opened');
})

closeBtn.addEventListener('click', () => {
    popUp.classList.remove('popup_opened');
})

formElement.addEventListener('submit', formSubmitHandler);