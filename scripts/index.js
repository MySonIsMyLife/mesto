// editPopup
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const editBtn = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit');
const closeBtn = document.querySelector('.popup__close_edit');
const formEdit = document.querySelector('.popup__form_edit');

function handleEditPopup () {
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
closeBtn.addEventListener('click', closePopupEdit);

// addPopup
const cardList = document.querySelector('.initialCards');
const cardTemplate = document.querySelector('.element-template').content;
const addBtn = document.querySelector('.profile__add-button');
const closeAddBtn = document.querySelector('.popup__close_add');
const popupAddForm = document.querySelector('.popup__form_add');
const popupAddCard = document.querySelector('.popup_add');
const cardLinkInput = document.querySelector('.popup__input_data_link');
const cardNameInput = document.querySelector('.popup__input_data_title');
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
    cardElement.querySelector('.element__image').src = card.link;
    cardElement.querySelector('.element__title').textContent = card.name;
    cardElement.querySelector('.element__image').alt = card.name;
    cardElement.querySelector('.element__image').addEventListener('click', openImagePopup);
    cardElement.querySelector('.element__like-button').addEventListener('click', likeButton);
    cardElement.querySelector('.element__delete-button').addEventListener('click', deleteButton);
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
    openPopup(popupAddCard);
};

function closePopupAdd () {
    closePopup(popupAddCard);
};

function likeButton (evt) {
    evt.target.classList.toggle('element__like-button_active');
}

function deleteButton (evt) {
    evt.target.closest('.element__item').remove();
}

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
closeAddBtn.addEventListener('click', closePopupAdd);

// imagePopup
const popupImage = document.querySelector('.popup_pictures');
const popupPicturesClose = document.querySelector('.popup__close_pictures');

function openImagePopup(evt) {
    openPopup(popupImage);
    popupImage.querySelector('.popup__name').textContent = evt.target.alt;
    popupImage.querySelector('.popup__image').src = evt.target.src; 
};

function closeImagePopup () {
    closePopup(popupImage);
};

function openPopup(popup) {
    popup.classList.add('popup__opened'); 
}

function closePopup(popup) {
    popup.classList.remove('popup__opened');
} 

popupPicturesClose.addEventListener('click', closeImagePopup);