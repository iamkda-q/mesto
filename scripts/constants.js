/* Массив с начальными карточками */
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
/* Попап изменения данных о себе любимом */
const editProfileButton = document.querySelector(
  ".profile__edit-profile-button"
);
const popupEditProfileSelector = ".popup_edit-profile";
const popupEP = document.querySelector(popupEditProfileSelector);


const formName = popupEP.querySelector(".popup__text_parameter_name");
const formVocation = popupEP.querySelector(
  ".popup__text_parameter_vocation"
);
const popupEditProfileForm =
popupEP.querySelector(".popup__form");

/* Попап добавления фотографии в галерею */
const addPhotoButton = document.querySelector(".profile__edit-gallery-button");
const popupAddPhotoSelector = ".popup_add-photo";
const popupAP = document.querySelector(popupAddPhotoSelector);
const formFigcaption = popupAP.querySelector(
  ".popup__text_parameter_figcaption"
);
const formPhotoLink = popupAP.querySelector(
  ".popup__text_parameter_photo-link"
);
const popupAddPhotoForm = popupAP.querySelector(".popup__form");

/* Попап открытия фотографий */
const popupFullPhoto = document.querySelector(".popup_full-photo");
const popupFullPhotoPhoto = popupFullPhoto.querySelector(".popup__photo");
const popupFullPhotoFigcaption =
  popupFullPhoto.querySelector(".popup__figcaption");

const profileName = document.querySelector(".profile__name");
const profileVocation = document.querySelector(".profile__vocation");

const galleryList = ".gallery__list";

/* Объект для валидации форм */
const validationConfig = {
  inputElement: ".popup__text",
  submitButton: ".popup__save-button",
  submitButtonDisableClass: "popup__save-button_disable",
  inputElementErrorClass: "popup__text_error",
  errorElementActiveClass: "popup__error-text_active",
  cancelButton: ".popup__close-button",
};

/* Массив попапов и их валидаторов*/
const popups = [popupFullPhoto];

export {initialCards, editProfileButton, popupEditProfileSelector,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhotoSelector, formFigcaption, formPhotoLink, popupAddPhotoForm,
  popupFullPhoto, popupFullPhotoPhoto, popupFullPhotoFigcaption,
  profileName, profileVocation, galleryList, validationConfig, popups};
