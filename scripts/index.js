"use strict";

import {initialCards, editProfileButton, popupEditProfile,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhoto, formFigcaption, formPhotoLink, popupAddPhotoForm,
  profileName, profileVocation, galleryList, validationConfig, popups} from "./constants.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);
popupEditProfileFormValidator.enableValidation();

const popupAddPhotoFormValidator = new FormValidator(validationConfig, popupAddPhotoForm);
popupAddPhotoFormValidator.enableValidation();

let escapeDown;

const returnClosePopup = (popup) => {
  return (evt) => {
    if (evt.key === "Escape") closePopup(popup);
  }
};

/* открытие popup */
const showPopup = (popup) => {
  escapeDown = returnClosePopup(popup);
  document.addEventListener("keydown", escapeDown);
  popup.classList.add("popup_opened");
};

/* закрытие popup */
const closePopup = (popup) => {
  document.removeEventListener("keydown", escapeDown);
  popup.classList.remove("popup_opened");
};

const setPopupCloseListeners = (popup) => {
  const popupCloseButton = popup.querySelector(".popup__close-button");
  popupCloseButton.addEventListener("click", () => {
    closePopup(popup);
  });

  const popupContainer = popup.querySelector(".popup__container");
  popupContainer.addEventListener("mousedown", (evt) => {
    evt.stopPropagation();
  });
  popup.addEventListener("mousedown", () => {
    closePopup(popup);
  });
};

/* Добавление value */
function addValueForContent(valueTarget, valueSource) {
  valueTarget.value = valueSource.textContent;
}

/* Функция создания фотографии для галереи */
function generatePhoto(item) {
  const card = new Card(item, "#gallery-item", showPopup);
  return card.generateCard();
}

/* Функция добавления фотографии в галерею */
function addPhoto(item) {
  galleryList.prepend(generatePhoto(item));
}

/* Добавление шести фотографий из массива */
initialCards.forEach((item) => {
  addPhoto(item);
});

/* Открытие/закрытие PopupEditProfile */
editProfileButton.addEventListener("click", () => {
  addValueForContent(formName, profileName);
  addValueForContent(formVocation, profileVocation);
  popupEditProfileFormValidator.activateButton();
  popupEditProfileFormValidator.resetError();
  showPopup(popupEditProfile);
});

/* Открытие/закрытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  formFigcaption.value = "";
  formPhotoLink.value = "";
  popupAddPhotoFormValidator.deactivateButton();
  popupAddPhotoFormValidator.resetError();
  showPopup(popupAddPhoto);
});

function submitPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value;
  profileVocation.textContent = formVocation.value;
  profileName.title = profileName.textContent;
  profileVocation.title = profileVocation.textContent;
  closePopup(popupEditProfile);
}

function submitPopupAddPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  addPhoto({name: formFigcaption.value, link: formPhotoLink.value});
  closePopup(popupAddPhoto);
}

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener("submit", submitPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener("submit", (evt) => {
  submitPopupAddPhoto(evt);
});

/* Реализация всех способов закрытия попапов с формами*/
popups.forEach((item) => setPopupCloseListeners(item));
