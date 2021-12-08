"use strict";

import {initialCards, editProfileButton, popupEditProfile, popupEditProfileCloseButton,
  formName, formVocation, popupEditProfileForm, popupEditProfileSaveButton,
  addPhotoButton, popupAddPhoto, formFigcaption, formPhotoLink, popupAddPhotoForm,
  popupAddPhotoSaveButton, profileName, profileVocation, galleryList,
  validationConfig} from "./constants.js";

import { Card, popupFullPhoto } from "./Card.js";

/* Массив попапов */
const popups = [popupEditProfile, popupAddPhoto, popupFullPhoto];

/* Объект для валидации форм */
const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__text",
  submitButton: ".popup__save-button",
  submitButtonDisableClass: "popup__save-button_disable",
  inputElementErrorClass: "popup__text_error",
  errorElementActiveClass: "popup__error-text_active",
};

/* Добавление title */
function addTitleForContent(titleTarget) {
  titleTarget.title = titleTarget.textContent;
}

/* Добавление value */
function addValueForContent(valueTarget, valueSource) {
  valueTarget.value = valueSource.textContent;
}

const returnSetEscapeCLose = (popup) => {
  return function setEscapeCLose(evt) {
    if (evt.key === "Escape" && popup.classList.contains("popup_opened")) {
      closeDifPopupType(popup);
    }
  }
};

let escapeDown;

/* открытие/закрытие popup */
const showPopup = (popup) => {
  escapeDown = returnSetEscapeCLose(popup);
  document.addEventListener("keydown", escapeDown);
  popup.classList.add("popup_opened");
};

const closePopupNotForm = (popup) => {
  document.removeEventListener("keydown", escapeDown);
  popup.classList.remove("popup_opened");
};

const closePopupForm = (popup, config) => {
  const { inputElementErrorClass, errorElementActiveClass } = config;
  const inputElements = popup.querySelectorAll(".popup__text");
  inputElements.forEach((inputElement) =>
    hideInputError(
      inputElement,
      inputElementErrorClass,
      errorElementActiveClass
    )
  );
  closePopupNotForm(popup);
};

const closeDifPopupType = (popup) => {
  if (popup.querySelector(".popup__text") != null) {
    closePopupForm(popup, validationConfig);
  } else {
    closePopupNotForm(popup);
  }
};

function submitPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value;
  profileVocation.textContent = formVocation.value;
  addTitleForContent(profileName);
  addTitleForContent(profileVocation);
  closePopupForm(popupEditProfile, validationConfig);
}

/* Функция создания фотографии с попапом FullPhoto */
function generatePhoto(figCaption, photoLink) {
  const galleryElement = galleryItem
    .querySelector(".gallery__element")
    .cloneNode(true);
  const galleryPhoto = galleryElement.querySelector(".gallery__photo");
  const galleryFigCaption = galleryElement.querySelector(
    ".gallery__figcaption"
  );
  const galleryLike = galleryElement.querySelector('.gallery__like');
  const galleryTrash = galleryElement.querySelector(".gallery__trash");
  galleryPhoto.src = photoLink;
  galleryPhoto.alt = figCaption;
  galleryFigCaption.textContent = figCaption;
  addTitleForContent(galleryFigCaption);
  galleryLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like_active')
  })
  galleryTrash.addEventListener("click", () => {
    galleryElement.remove();
  });
  galleryPhoto.addEventListener("click", () => {
    popupFullPhotoPhoto.src = galleryPhoto.src;
    popupFullPhotoPhoto.alt = galleryFigCaption.textContent;
    popupFullPhotoFigcaption.textContent = galleryFigCaption.textContent;
    showPopup(popupFullPhoto);
  });
  return galleryElement;
}

/* Функция добавления фотографии в галерею */
function addPhoto(figCaption, photoLink) {
  galleryList.prepend(generatePhoto(figCaption, photoLink));
}

function submitPopupAddPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  addPhoto(formFigcaption.value, formPhotoLink.value);
  closePopupForm(popupAddPhoto, validationConfig);
}

/* Добавление шести фотографий из массива */
initialCards.forEach((item) => {
  addPhoto(item.name, item.link);
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

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener("submit", submitPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener("submit", (evt) => {
  submitPopupAddPhoto(evt);
});

const setPopupCloseListeners = (popup) => {
  const popupCloseButton = popup.querySelector(".popup__close-button");
  popupCloseButton.addEventListener("click", () => {
    closeDifPopupType(popup);
  });

  const popupContainer = popup.querySelector(".popup__container");

  popupContainer.addEventListener("mousedown", (evt) => {
    evt.stopPropagation();
  });
  popup.addEventListener("mousedown", () => {
    closeDifPopupType(popup);
  });
};

/* Валидация всех форм */
enableValidation(validationConfig);

/* Реализация всех способов закрытия попапов */
popups.forEach((popup) => setPopupCloseListeners(popup));
