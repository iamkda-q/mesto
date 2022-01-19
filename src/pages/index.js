"use strict";

/* import './index.css'; */

import {initialCards, editProfileButton, popupEditProfileSelector,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhotoSelector, popupAddPhotoForm,
  profileNameSelector, profileVocationSelector, popupFullPhotoSelector,
  galleryList, validationConfig, profileAvatar} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"

const userInfo = new UserInfo({nameSelector : profileNameSelector, vocationSelector : profileVocationSelector, avatarSelector: profileAvatar});

const popupFullPhotoXXL = new PopupWithImage(popupFullPhotoSelector);

const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (evt, inputList) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    userInfo.setUserInfo(inputList["name"], inputList["vocation"]);
    popupEditProfile.close();
});

const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);

const handleCardClick = popupFullPhotoXXL.open.bind(popupFullPhotoXXL);

function createCard(item) {
  const cardTemplate = new Card(item, "#gallery-item", handleCardClick);
  const card = cardTemplate.generateCard();
  return card;
}

// Создание "слоя" класса для отрисовки элементов в выбранном контейнере
const сards = new Section(/* {items : initialCards, renderer :  */(item) => { // закоментированный код отвечал за добавление шести карточек с компа
  сards.addItem(createCard(item));
}/* } */, galleryList);

/* Добавление шести фотографий из массива */
// сards.renderItems();

const popupAddPhoto = new PopupWithForm(popupAddPhotoSelector, (evt, inputList) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    сards.renderer(inputList);
    popupAddPhoto.close();
});

const popupAddPhotoFormValidator = new FormValidator(validationConfig, popupAddPhotoForm);

[popupEditProfile, popupAddPhoto, popupFullPhotoXXL].forEach(popup => popup.setEventListeners());
[popupEditProfileFormValidator, popupAddPhotoFormValidator].forEach(formValidator => formValidator.enableValidation());

/* Открытие PopupEditProfile */
editProfileButton.addEventListener("click", () => {
  const userInfoObject = userInfo.getUserInfo();
  [formName.value, formVocation.value] = [userInfoObject.name, userInfoObject.vocation];
  popupEditProfileFormValidator.activateButton();
  popupEditProfileFormValidator.resetError();
  popupEditProfile.open();
});

/* Открытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  popupAddPhotoFormValidator.deactivateButton();
  popupAddPhotoFormValidator.resetError();
  popupAddPhoto.open();
});

/* Создание переменной для запросов */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34/',
  headers: {
    authorization: 'be33cdb8-be40-4c20-b8a9-d95898749c16',
  }
});

/* Загрузка данных о пользователе с сервера */
api.getInitialUserInfo()
  .then(res => {
    userInfo.setUserInfo({
      name: res.name,
      vocation: res.about
    })
    userInfo.setAvatar(res.avatar)
  });

api.getInitialCards().
  then(res => {
    res.forEach(item => сards.renderer(item));
  });







