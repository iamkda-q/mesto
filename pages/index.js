"use strict";

import {initialCards, editProfileButton, popupEditProfileSelector,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhotoSelector, formFigcaption, formPhotoLink, popupAddPhotoForm,
  profileNameSelector, profileVocationSelector, popupFullPhotoSelector,
  galleryList, validationConfig} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const userInfo = new UserInfo({nameSelector : profileNameSelector, vocationSelector : profileVocationSelector});

const popupFullPhotoXXL = new PopupWithImage(popupFullPhotoSelector);

const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (evt) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    userInfo.setUserInfo(formName.value, formVocation.value);
    popupEditProfile.close();
});

const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);

const handleCardClick = popupFullPhotoXXL.open.bind(popupFullPhotoXXL);

const popupAddPhoto = new PopupWithForm(popupAddPhotoSelector, (evt) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    const newCard = new Section({items : [{name: formFigcaption.value, link: formPhotoLink.value}], renderer : (item) => {
      const cardTemplate = new Card(item, "#gallery-item", handleCardClick);
      const card = cardTemplate.generateCard();
      newCard.addItem(card);
    }}, galleryList);
    newCard.renderItems();
    popupAddPhoto.close();
});

const popupAddPhotoFormValidator = new FormValidator(validationConfig, popupAddPhotoForm);

// Создание "слоя" класса для отрисовки элементов в выбранном контейнере
const Cards = new Section({items : initialCards, renderer : (item) => {
  const cardTemplate = new Card(item, "#gallery-item", handleCardClick);
  const card = cardTemplate.generateCard();
  Cards.addItem(card);
}}, galleryList);

[popupEditProfile, popupAddPhoto, popupFullPhotoXXL].forEach(popup => popup.setEventListeners());
[popupEditProfileFormValidator, popupAddPhotoFormValidator].forEach(formValidator => formValidator.enableValidation());

/* Добавление шести фотографий из массива */
Cards.renderItems();

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
