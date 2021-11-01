'use srrict'

/* Объявление переменных */
const editProfileButton = document.querySelector('.profile__edit-profile-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');

/* устанавливаем в форму значения из профиля */
let formName = document.querySelector('.popup__text_parameter_name');
formName.setAttribute('value', profileName.textContent);
let formVocation = document.querySelector('.popup__text_parameter_vocation');
formVocation.setAttribute('value', profileVocation.textContent);

/* Блок появления popupa */
showEditPopup = () => popup.classList.remove('hidden');
closeEditPopup = () => popup.classList.add('hidden');

editProfileButton.addEventListener('click', showEditPopup);
popupCloseButton.addEventListener('click', closeEditPopup);

/* Обработчик изменения данных профиля */
let editForm = document.querySelector('.popup__window'); //находим форму
function formSubmitHandler (evt) {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    formName = document.querySelector('.popup__text_parameter_name').value;
    formVocation = document.querySelector('.popup__text_parameter_vocation').value;
    profileName.textContent = formName;
    profileVocation.textContent = formVocation;
    closeEditPopup();
}

editForm.addEventListener('submit', formSubmitHandler);

/* Обработчик события простановки лайка */

