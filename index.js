const editBtn = document.querySelector('.profile__edit-button');
const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');
const likeBtns = document.querySelector('.element__like-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__describe');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

editBtn.addEventListener('click', function(event) {
    event.preventDefault();
    popUp.classList.add('popup_opened');
})

closeBtn.addEventListener('click', () => {
    popUp.classList.remove('popup_opened');
})

likeBtns.addEventListener('click', function(event) {
    event.preventDefault();
    likeBtns.classList.toggle('element__like-button_active');
})

function formSubmitHandler (event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popUp.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 