// editPopup
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const editBtn = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit');
const formEdit = document.querySelector('.popup__form_edit');
const popupEdit = document.querySelector('.popup_edit');

function handleEditPopup () {
    resetForm(popupEditProfile, config);
    openPopup(popupEditProfile); 
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent; 
};

function submitEditProfileForm (event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupEditProfile);
};

function closePopupEdit () {
    closePopup(popupEditProfile);
};

editBtn.addEventListener('click', handleEditPopup);
formEdit.addEventListener('submit', submitEditProfileForm);
popupEdit.addEventListener('mousedown', closeMousePopup);

// addPopup
const cardList = document.querySelector('.initialCards');
const cardTemplate = document.querySelector('.element-template').content;
const addBtn = document.querySelector('.profile__add-button');
const popupAddForm = document.querySelector('.popup__form_add');
const popupAddCard = document.querySelector('.popup_add');
const cardLinkInput = document.querySelector('.popup__input_data_link');
const cardNameInput = document.querySelector('.popup__input_data_title');
const popupAdd = document.querySelector('.popup_add');
const newCard = {}
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function createCard(card) {    
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');
    cardElementImage.src = card.link;
    cardElement.querySelector('.element__title').textContent = card.name;
    cardElementImage.alt = card.name;

    cardElementImage.addEventListener('click', () => openImagePopup(card));

    cardElement.querySelector('.element__like-button').addEventListener('click', toggleLike);
    cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
    return cardElement;
};

const cardElementArray = initialCards.map(card => {
    return createCard(card);
});

cardElementArray.forEach(cardElement => {
    renderCard(cardElement);
});

function renderCard(cardElement) {
    cardList.prepend(cardElement)
};

function openPopupAdd () {
    resetForm(popupAddCard, config);
    openPopup(popupAddCard);
};

function closePopupAdd () {
    closePopup(popupAddCard);
};

function toggleLike (evt) {
    evt.target.classList.toggle('element__like-button_active');
};

function deleteCard (evt) {
    evt.target.closest('.element__item').remove();
};

popupAddForm.addEventListener('submit', function (event) {
    event.preventDefault();     
    // add new card 
    newCard.link = cardLinkInput.value;
    newCard.name = cardNameInput.value;
    renderCard(createCard(newCard));
    // clear form
    popupAddForm.reset ();
    // close form
    closePopup(popupAddCard);  
});  

addBtn.addEventListener('click', openPopupAdd);
popupAdd.addEventListener('mousedown', closeMousePopup);

// imagePopup
const popupImage = document.querySelector('.popup_pictures');
const popupImageOpen = document.querySelector('.popup__image')

function openImagePopup(card) {
    openPopup(popupImage); 
    popupImage.querySelector('.popup__name').textContent = card.name;
    popupImageOpen.src = card.link;
    popupImageOpen.alt = card.name;
};

function closeImagePopup () {
    closePopup(popupImage);
};

// функция закрытия Esc
function closeEscPopup (event) {
    if (event.key === 'Escape') {
        const popup = document.querySelector('.popup__opened') 
        closePopup(popup);
}
};

//функция закрытия с мышки
function closeMousePopup (event) {
    if (event.target.classList.contains('popup__opened')|| event.target.classList.contains('popup__close')) {
        closePopup(event.currentTarget);
    }   
};

function openPopup(popup) {
    document.addEventListener('keydown', closeEscPopup);
    popup.classList.add('popup__opened');
};

function closePopup(popup) {
    popup.classList.remove('popup__opened');
    document.removeEventListener('keydown', closeEscPopup);
};

function resetForm(popup, config) {
    const errors = Array.from(popup.querySelectorAll(`.${config.inputErrorClass}`));
    const button = popup.querySelector(config.submitButtonSelector);
    const inputs = Array.from(popup.querySelectorAll(config.inputSelector));

    button.disabled = true;
    button.classList.add(config.inactiveButtonClass);

    errors.forEach((error) => {
        error.classList.remove(config.errorClass); 
    });

    inputs.forEach((input) => {
        input.value = '';
    });
};

popupImage.addEventListener('mousedown', closeMousePopup);