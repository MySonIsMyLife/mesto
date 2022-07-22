// Валидация
const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
};

//показ ошибки
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

//скрытие ошибки
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.remove(inputErrorClass);
errorElement.classList.remove(errorClass);
errorElement.textContent = '';
};

//проверка валидации инпутов
const checkInputValidity = (formElement, inputElement, rest) => {
if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest);
} else {
    hideInputError(formElement, inputElement, rest);
}
};

//набор слушателей валидации
const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...rest }) => {
const inputList = Array.from(formElement.querySelectorAll(inputSelector));
const buttonElement = formElement.querySelector(submitButtonSelector);


inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement, rest);
    // чтобы проверять его при изменении любого из полей
    toggleButtonState(inputList, buttonElement, rest);
    });
});
};
  
const hasInvalidInput = (inputList) => {
return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
})
}

//переключает состояние кнопки
const toggleButtonState = (inputList, buttonElement, { submitButtonSelector, inactiveButtonClass }) => {
if (!hasInvalidInput(inputList)) {
    buttonElement.classList.add(submitButtonSelector);
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
    } 
else {
    buttonElement.classList.remove(submitButtonSelector);
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
}
}

//устаналваивает слушатели формам, для проверки валидности
const enableValidation = ( { formSelector, ...rest } ) => {
const formElements = Array.from(document.querySelectorAll(formSelector));
formElements.forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    setEventListeners(form, rest)
    });

};

enableValidation(config);