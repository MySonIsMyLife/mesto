const editBtn = document.querySelector('.profile__edit-button');
const popUp = document.querySelector('.popup_edit');
const closeBtn = document.querySelector('.popup__close_edit');
const formEdit = document.querySelector('.popup__form_edit');
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const cardList = document.querySelector(".initialCards");
const cardTemplate = document.querySelector(".element-template").content;
const cardTitle = document.querySelector('.element__title');
const cardImage = document.querySelector('.element__image');
const formBtn = document.querySelector('.popup__submit-button_add');
const popUpAddForm = document.querySelector('.popup__form_add');
const card = document.querySelector('.element__item');
const image = document.querySelector('.element__image');
const likeBtn = document.querySelectorAll('.element__like-button');
const deleteBtn = document.querySelector('.element__delete-button');
const popUpPictures = document.querySelector('.popup__pictures');
const popUpPicturesClose = document.querySelector('.popup__close_pictures');
const popUpAdd = document.querySelector('.popup_add');
const addBtn = document.querySelector('.profile__add-button');
const closeAddBtn = document.querySelector('.popup__close_add');
const titleInput = document.querySelector('.popup__input_data_title');
const linkInput = document.querySelector('.popup__input_data_link');
const popUpImage = document.querySelector('.popup__image');
const popUpTitle = document.querySelector('.popup__name');

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
function formSubmitHandler (event) {
    event.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popUp.classList.remove('popup__opened');
};

function popUpEditOpen () {
    popUp.classList.add('popup__opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
};

function popUpEditclose () {
    popUp.classList.remove('popup__opened');
};

function popUpAddOpen () {
    popUpAdd.classList.add('popup__opened');
}

function popUpAddClose () {
    popUpAdd.classList.remove('popup__opened');
}

function popUpImgOpen(name, link) {
    console.log("name, link =>", name, link)
    popUpPictures.classList.add('popup__opened');
    popUpPictures.querySelector('.popup__name').textContent = name;
    popUpPictures.querySelector('.popup__image').src = link;
    console.log(popUpPictures)
}

function popUpImgClose () {
    popUpPictures.classList.remove('popup__opened');
}

// use massive

initialCards.forEach(function (element) {
    addNewCard(element.name, element.link)
})

function addNewCard(name, link) {
    const cardElement = cardTemplate.cloneNode(true); // docuemnt something
    cardElement.querySelector('.element__title').textContent = name;
   
    const cardImg = cardElement.querySelector('.element__image');
    cardImg.src = link;
    cardImg.addEventListener('click', function() {
        popUpImgOpen(name, link);
    })

    const likeButton = cardElement.querySelector('.element__like-button');
    likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('element__like-button_active');
    })
    const deleteButton = cardElement.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', (evt) => {
        cardList.removeChild(evt.target.parentNode);
    })

    cardList.prepend(cardElement); // push into list
}

function assignListeners() {
    // open & close first popup
    editBtn.addEventListener('click', popUpEditOpen);
    closeBtn.addEventListener('click', popUpEditclose);
    formEdit.addEventListener('submit', formSubmitHandler);
    // open & close second popup
    addBtn.addEventListener('click', popUpAddOpen);
    closeAddBtn.addEventListener('click', popUpAddClose);
    // close popupImg
    popUpPicturesClose.addEventListener('click', popUpImgClose);
    // add new card form
    popUpAddForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // get input values
        let newCardName = document.querySelector('.popup__input_data_title');
        let newCardLink = document.querySelector('.popup__input_data_link');  
        // add new card
        addNewCard(newCardName.value, newCardLink.value);     
        // remove last element in array (cardList)
        cardList.removeChild(cardList.lastElementChild);
        // clear form
        newCardName.value = '';
        newCardLink.value = '';
        // close form
        popUpAdd.classList.remove('popup__opened');       
    });
}

assignListeners();