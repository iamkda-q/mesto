"use strict";

import {initialCards, editProfileButton, popupEditProfileSelector,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhotoSelector, formFigcaption, formPhotoLink, popupAddPhotoForm,
  profileName, profileVocation, popupFullPhotoSelector, galleryList, validationConfig} from "./constants.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);
popupEditProfileFormValidator.enableValidation();

const popupAddPhotoFormValidator = new FormValidator(validationConfig, popupAddPhotoForm);
popupAddPhotoFormValidator.enableValidation();

// let escapeDown;

// const returnClosePopup = (popup) => {
//   return (evt) => {
//     if (evt.key === "Escape") closePopup(popup);
//   }
// };

// /* открытие popup */
// const showPopup = (popup) => {
//   escapeDown = returnClosePopup(popup);
//   document.addEventListener("keydown", escapeDown);
//   popup.classList.add("popup_opened");
// };

// /* закрытие popup */
// const closePopup = (popup) => {
//   document.removeEventListener("keydown", escapeDown);
//   popup.classList.remove("popup_opened");
// };

// const setPopupCloseListeners = (popup) => {
//   const popupCloseButton = popup.querySelector(".popup__close-button");
//   popupCloseButton.addEventListener("click", () => {
//     closePopup(popup);
//   });

//   const popupContainer = popup.querySelector(".popup__container");
//   popupContainer.addEventListener("mousedown", (evt) => {
//     evt.stopPropagation();
//   });
//   popup.addEventListener("mousedown", () => {
//     closePopup(popup);
//   });
// };

/* Добавление value */
function addValueForContent(valueTarget, valueSource) {
  valueTarget.value = valueSource.textContent;
}


const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (evt) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    profileName.textContent = formName.value;
    profileVocation.textContent = formVocation.value;
    profileName.title = profileName.textContent;
    profileVocation.title = profileVocation.textContent;
    popupEditProfile.close();
});
popupEditProfile.setEventListeners();
const popupAddPhoto = new PopupWithForm(popupAddPhotoSelector, (evt) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    const newCard = new Section({items : [{name: formFigcaption.value, link: formPhotoLink.value}], renderer : (item) => {
      const cardTemplate = new Card(item, "#gallery-item", popupFullPhotoXXL.open.bind(popupFullPhotoXXL));
      const card = cardTemplate.generateCard();
      newCard.addItem(card);
    }}, galleryList);
    newCard.renderItems();
    popupAddPhoto.close();
});
popupAddPhoto.setEventListeners();
const popupFullPhotoXXL = new PopupWithImage(popupFullPhotoSelector);
popupFullPhotoXXL.setEventListeners();

// Создание "слоя" класса для отрисовки элементов в выбранном контейнереs
const Cards = new Section({items : initialCards, renderer : (item) => {
  const cardTemplate = new Card(item, "#gallery-item", popupFullPhotoXXL.open.bind(popupFullPhotoXXL));
  const card = cardTemplate.generateCard();
  Cards.addItem(card);
}}, galleryList);

/* Добавление шести фотографий из массива */
Cards.renderItems();

/* Открытие/закрытие PopupEditProfile */
editProfileButton.addEventListener("click", () => {
  addValueForContent(formName, profileName);
  addValueForContent(formVocation, profileVocation);
  popupEditProfileFormValidator.activateButton();
  popupEditProfileFormValidator.resetError();
  // showPopup(popupEditProfile);
  popupEditProfile.open();
});

/* Открытие/закрытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  // formFigcaption.value = "";
  // formPhotoLink.value = "";
  popupAddPhotoFormValidator.deactivateButton();
  popupAddPhotoFormValidator.resetError();
  // showPopup(popupAddPhoto);
  popupAddPhoto.open();
});

// function submitPopupEditProfile(evt) {
//   evt.preventDefault(); // отменяет стандартную отправку формы.
//   profileName.textContent = formName.value;
//   profileVocation.textContent = formVocation.value;
//   profileName.title = profileName.textContent;
//   profileVocation.title = profileVocation.textContent;
//   popupEditProfile.close();
// }

// function submitPopupAddPhoto(evt) {
//   evt.preventDefault(); // отменяет стандартную отправку формы.
//   const newCard = new Section({items : [{name: formFigcaption.value, link: formPhotoLink.value}], renderer : (item) => {
//     const cardTemplate = new Card(item, "#gallery-item", popupFullPhotoXXL.open.bind(popupFullPhotoXXL));
//     const card = cardTemplate.generateCard();
//     newCard.addItem(card);
//   }}, galleryList);
//   newCard.renderItems();
//   popupAddPhoto.close();
// }

/* Сохранение данных о пользователе*/
// popupEditProfileForm.addEventListener("submit", submitPopupEditProfile);

/* Добавление фотографии в галерею*/
// popupAddPhotoForm.addEventListener("submit", (evt) => {
//   submitPopupAddPhoto(evt);
// });

/* Реализация всех способов закрытия попапов с формами*/


/* popups.forEach((item) => setPopupCloseListeners(item)); */


