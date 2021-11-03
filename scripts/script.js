'use srrict'

/* Объявление переменных */
const editProfileButton = document.querySelector('.profile__edit-profile-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');
const formName = document.querySelector('.popup__text_parameter_name');
const formVocation = document.querySelector('.popup__text_parameter_vocation');

/* блок появления popupa и установка в форму значений из профиля при его загрузке*/
showEditPopup = () => {
  formName.value = profileName.textContent;
  formVocation.value = profileVocation.textContent;
  popup.classList.add('popup_opened');
};

closeEditPopup = () => popup.classList.remove('popup_opened');

editProfileButton.addEventListener('click', showEditPopup);
popupCloseButton.addEventListener('click', closeEditPopup);

/* Обработчик изменения данных профиля */
let editForm = document.querySelector('.popup__container'); //находим форму
function formSubmitHandler (evt) {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    profileName.textContent = formName.value;
    profileVocation.textContent = formVocation.value;
    closeEditPopup();
}

editForm.addEventListener('submit', formSubmitHandler);
