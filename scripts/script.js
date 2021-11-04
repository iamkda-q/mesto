'use srrict'

/* Объявление переменных */
const editProfileButton = document.querySelector('.profile__edit-profile-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');
const formName = document.querySelector('.popup__text_parameter_name');
const formVocation = document.querySelector('.popup__text_parameter_vocation');
let listOfCaption = document.querySelectorAll('.gallery__figcaption');
/* Обработчик изменения данных профиля */
let editForm = document.querySelector('.popup__container'); //находим форму

/* блок появления popupa и установка в форму значений из профиля при его загрузке*/
showEditPopup = () => {
  formName.value = profileName.textContent;
  formVocation.value = profileVocation.textContent;
  popup.classList.add('popup_opened');
};

closeEditPopup = () => popup.classList.remove('popup_opened');

function formSubmitHandler (evt) {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    profileName.textContent = formName.value.trim() ? formName.value : 'Без имени'; /* .trim() - удаляет пробелы с начала и конца строки, и повторяющиеся пробелы*/
    profileVocation.textContent = formVocation.value.trim() ? formVocation.value : 'Без хобби';
    profileName.setAttribute('title', profileName.textContent);
    profileVocation.setAttribute('title', profileVocation.textContent);
    closeEditPopup();
}

/* Автоматическое добавление title к фотографиям */
function addTitle (list) {
  for (let item of list) {
    item.setAttribute('title', item.textContent);
  }
}

addTitle(listOfCaption);

/* Открытие/закртыие popup */
editProfileButton.addEventListener('click', showEditPopup);
popupCloseButton.addEventListener('click', closeEditPopup);

/* Сохранение данных о пользователе*/
editForm.addEventListener('submit', formSubmitHandler);
