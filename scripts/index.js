"use strict";

import {initialCards, editProfileButton, popupEditProfileSelector,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhotoSelector, formFigcaption, formPhotoLink, popupAddPhotoForm,
  profileName, profileVocation, popupFullPhotoSelector, galleryList, validationConfig} from "./constants.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const userInfo = new UserInfo({nameSelector : ".profile__name", vocationSelector : ".profile__vocation"});

const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (evt) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    userInfo.setUserInfo(formName.value, formVocation.value);
    popupEditProfile.close();
});

const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);

const handleCardClick = () => {
  popupFullPhotoXXL.open();
}

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

const popupFullPhotoXXL = new PopupWithImage(popupFullPhotoSelector);

// Создание "слоя" класса для отрисовки элементов в выбранном контейнереs
const Cards = new Section({items : initialCards, renderer : (item) => {
  const cardTemplate = new Card(item, "#gallery-item", popupFullPhotoXXL.open.bind(popupFullPhotoXXL));
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
