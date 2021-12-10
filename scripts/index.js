"use strict";

import {initialCards, editProfileButton, popupEditProfile,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhoto, formFigcaption, formPhotoLink, popupAddPhotoForm,
  popupFullPhoto, profileName, profileVocation, galleryList, validationConfig} from "./constants.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);
popupEditProfileFormValidator.enableValidation();

const popupAddPhotoFormValidator = new FormValidator(validationConfig, popupAddPhotoForm);
popupAddPhotoFormValidator.enableValidation();

/* Массив попапов и их валидаторов*/
const popups = [[popupEditProfile, popupEditProfileFormValidator], [popupAddPhoto, popupAddPhotoFormValidator], [popupFullPhoto]];

const returnSetEscapeCLose = (popup, validator) => {
  return function setEscapeCLose(evt) {
    if (evt.key === "Escape" && popup.classList.contains("popup_opened")) {
      closeDifPopupType(popup, validator);
    }
  }
};

let escapeDown;

/* открытие popup */
const showPopup = (popup, validator) => {
  escapeDown = returnSetEscapeCLose(popup, validator);
  document.addEventListener("keydown", escapeDown);
  popup.classList.add("popup_opened");
};

const closePopupNotForm = (popup) => {
  document.removeEventListener("keydown", escapeDown);
  popup.classList.remove("popup_opened");
};

const closePopupForm = (popup, validator) => {
  validator.inputElements.forEach((inputElement) => validator.hideInputError(inputElement));
  closePopupNotForm(popup);
};

const closeDifPopupType = (popup, validator) => {
  if (popup.querySelector(".popup__text") != null) {
    closePopupForm(popup, validator);
  } else {
    closePopupNotForm(popup);
  }
};

const setPopupCloseListeners = (popup, validator) => {
  const popupCloseButton = popup.querySelector(".popup__close-button");
  popupCloseButton.addEventListener("click", () => {
    closeDifPopupType(popup, validator);
  });

  const popupContainer = popup.querySelector(".popup__container");

  popupContainer.addEventListener("mousedown", (evt) => {
    evt.stopPropagation();
  });
  popup.addEventListener("mousedown", () => {
    closeDifPopupType(popup, validator);
  });
};

/* Добавление value */
function addValueForContent(valueTarget, valueSource) {
  valueTarget.value = valueSource.textContent;
}

/* Функция добавления фотографии в галерею */
function addPhoto(item) {
  const card = new Card(item, "#gallery-item");
  const cardElement = card.generateCard();
  card.setShowPhotoAction(showPopup);
  galleryList.prepend(cardElement);
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
  showPopup(popupEditProfile, popupEditProfileFormValidator);
});

/* Открытие/закрытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  formFigcaption.value = "";
  formPhotoLink.value = "";
  popupAddPhotoFormValidator.deactivateButton();
  showPopup(popupAddPhoto, popupAddPhotoFormValidator);
});

function submitPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value;
  profileVocation.textContent = formVocation.value;
  profileName.title = profileName.textContent;
  profileVocation.title = profileVocation.textContent;
  closePopupForm(popupEditProfile, popupEditProfileFormValidator);
}

function submitPopupAddPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  addPhoto({name: formFigcaption.value, link: formPhotoLink.value});
  closePopupForm(popupAddPhoto, popupAddPhotoFormValidator);
}

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener("submit", submitPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener("submit", (evt) => {
  submitPopupAddPhoto(evt);
});

/* Реализация всех способов закрытия попапов */
popups.forEach((item) => setPopupCloseListeners(...item));
