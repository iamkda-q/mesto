"use strict";

import {initialCards, editProfileButton, popupEditProfile,
  formName, formVocation, popupEditProfileForm, popupEditProfileSaveButton,
  addPhotoButton, popupAddPhoto, formFigcaption, formPhotoLink, popupAddPhotoForm,
  popupAddPhotoSaveButton, popupFullPhoto, profileName, profileVocation, galleryList,
  validationConfig} from "./constants.js";

import {setPopupCloseListeners, showPopup, closePopupForm} from "./popups.js";

import { Card } from "./Card.js";

/* Массив попапов */
const popups = [popupEditProfile, popupAddPhoto, popupFullPhoto];

/* Добавление value */
function addValueForContent(valueTarget, valueSource) {
  valueTarget.value = valueSource.textContent;
}

/* Функция добавления фотографии в галерею */
function addPhoto(item) {
  const cardTemplate = new Card(item, "#gallery-item");
  const card = cardTemplate.generateCard();
  galleryList.prepend(card);
}

/* Добавление шести фотографий из массива */
initialCards.forEach((item) => {
  addPhoto(item);
});

/* Открытие/закрытие PopupEditProfile */
editProfileButton.addEventListener("click", () => {
  addValueForContent(formName, profileName);
  addValueForContent(formVocation, profileVocation);
  activateButton(popupEditProfileSaveButton, validationConfig["submitButtonDisableClass"]);
  showPopup(popupEditProfile);
});

/* Открытие/закрытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  formFigcaption.value = "";
  formPhotoLink.value = "";
  deactivateButton(popupAddPhotoSaveButton, validationConfig["submitButtonDisableClass"]);
  showPopup(popupAddPhoto);
});

function submitPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value;
  profileVocation.textContent = formVocation.value;
  profileName.title = profileName.textContent;
  profileVocation.title = profileVocation.textContent;
  closePopupForm(popupEditProfile, validationConfig);
}

function submitPopupAddPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  addPhoto({name: formFigcaption.value, link: formPhotoLink.value});
  closePopupForm(popupAddPhoto, validationConfig);
}

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener("submit", submitPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener("submit", (evt) => {
  submitPopupAddPhoto(evt);
});

/* Реализация всех способов закрытия попапов */
popups.forEach((popup) => setPopupCloseListeners(popup));

/* Валидация всех форм */
enableValidation(validationConfig);
