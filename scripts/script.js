"use strict";

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
const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupEditProfileCloseButton = popupEditProfile.querySelector(
  ".popup__close-button"
);
const formName = popupEditProfile.querySelector(".popup__text_parameter_name");
const formVocation = popupEditProfile.querySelector(
  ".popup__text_parameter_vocation"
);
const popupEditProfileForm =
  popupEditProfile.querySelector(".popup__container");
const popupEditProfileSaveButton = popupEditProfile.querySelector(
  ".popup__save-button"
);

/* Попап добавления фотографии в галерею */
const addPhotoButton = document.querySelector(".profile__edit-gallery-button");
const popupAddPhoto = document.querySelector(".popup_add-photo");
const popupAddPhotoCloseButton = popupAddPhoto.querySelector(
  ".popup__close-button"
);
const formFigcaption = popupAddPhoto.querySelector(
  ".popup__text_parameter_figcaption"
);
const formPhotoLink = popupAddPhoto.querySelector(
  ".popup__text_parameter_photo-link"
);
const popupAddPhotoForm = popupAddPhoto.querySelector(".popup__container");
const popupAddPhotoSaveButton = popupAddPhoto.querySelector(
  ".popup__save-button"
);

/* Попап открытия фотографий */
const popupFullPhoto = document.querySelector(".popup_full-photo");
const popupFullPhotoCloseButton = popupFullPhoto.querySelector(
  ".popup__close-button"
);
const popupFullPhotoPhoto = popupFullPhoto.querySelector(".popup__photo");
const popupFullPhotoFigcaption =
  popupFullPhoto.querySelector(".popup__figcaption");

const profileName = document.querySelector(".profile__name");
const profileVocation = document.querySelector(".profile__vocation");

const galleryList = document.querySelector(".gallery__list");
const galleryItem = document.querySelector("#gallery-item").content; // template элемента галереи

/* Массив всех попапов */
const popups = [popupEditProfile, popupAddPhoto, popupFullPhoto];

/* Объект для валидации форм */
const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__text",
  submitButton: ".popup__save-button",
  submitButtonDisableClass: "popup__save-button_disable",
  inputElementErrorClass: "popup__text_error",
  errorElementActiveClass: "popup__error-text_active",
  cancelButton: ".popup__close-button",
};

/* Добавление title */
function addTitleForContent(titleTarget) {
  titleTarget.title = titleTarget.textContent;
}

/* Добавление value */
function addValueForContent(valueTarget, valueSource) {
  valueTarget.value = valueSource.textContent;
}

/* открытие/закрытие popup */
const showPopup = (popup) => popup.classList.add("popup_opened");
const closePopup = (popup) => popup.classList.remove("popup_opened");

function submitPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value;
  profileVocation.textContent = formVocation.value;
  addTitleForContent(profileName);
  addTitleForContent(profileVocation);
  closePopup(popupEditProfile);
}

/* Функция добавления фотографии на страницу с открытием попапа FullPhoto */
function addPhoto(figCaption, photoLink) {
  const galleryElement = galleryItem
    .querySelector(".gallery__element")
    .cloneNode(true);
  const galleryPhoto = galleryElement.querySelector(".gallery__photo");
  const galleryFigCaption = galleryElement.querySelector(
    ".gallery__figcaption"
  );
  const galleryTrash = galleryElement.querySelector(".gallery__trash");
  galleryPhoto.src = photoLink;
  galleryPhoto.alt = figCaption;
  galleryFigCaption.textContent = figCaption;
  addTitleForContent(galleryFigCaption);
  galleryTrash.addEventListener("click", () => {
    galleryElement.remove();
  });
  galleryPhoto.addEventListener("click", () => {
    popupFullPhotoPhoto.src = galleryPhoto.src;
    popupFullPhotoPhoto.alt = galleryFigCaption.textContent;
    popupFullPhotoFigcaption.textContent = galleryFigCaption.textContent;
    showPopup(popupFullPhoto);
  });
  galleryList.prepend(galleryElement);
}

function submitPopupAddPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  addPhoto(formFigcaption.value, formPhotoLink.value);
  closePopup(popupAddPhoto);
}

/* Добавление value в попап, чтобы при первой загрузке кнопка "Сохранить" была активна */
addValueForContent(formName, profileName);
addValueForContent(formVocation, profileVocation);

/* Добавление шести фотографий из массива */
initialCards.forEach((item) => {
  addPhoto(item.name, item.link);
});

/* Открытие/закрытие PopupEditProfile */
editProfileButton.addEventListener("click", () => {
  showPopup(popupEditProfile);
  addValueForContent(formName, profileName);
  addValueForContent(formVocation, profileVocation);
  popupEditProfileSaveButton.classList.remove("popup__save-button_disable");
  popupEditProfileSaveButton.disabled = false;
});

/* Открытие/закрытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  showPopup(popupAddPhoto);
  formFigcaption.value = "";
  formPhotoLink.value = "";
  popupAddPhotoSaveButton.classList.add("popup__save-button_disable");
  popupAddPhotoSaveButton.disabled = true;
});

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener("submit", submitPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener("submit", (evt) => {
  submitPopupAddPhoto(evt);
});

/* Проставление лайков не по событию каждого лайка, а по всплытию события на галерее-родителе */
galleryList.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("gallery__like")) {
    evt.target.classList.toggle("gallery__like_active");
  }
});

const closePopupByDifWays = (popup, config) => {
  const { inputElementErrorClass, errorElementActiveClass } = config;
  const inputElements = popup.querySelectorAll(".popup__text");
  const popupCloseButton = popup.querySelector(".popup__close-button");

  popupCloseButton.addEventListener("click", () => {
    closePopup(popup);
    inputElements.forEach((inputElement) =>
      hideInputError(
        inputElement,
        inputElementErrorClass,
        errorElementActiveClass
      )
    );
  });

  const popupContainer = popup.querySelector(".popup__container");

  popupContainer.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
  popup.addEventListener("click", () => {
    closePopup(popup);
    inputElements.forEach((inputElement) =>
    hideInputError(
      inputElement,
      inputElementErrorClass,
      errorElementActiveClass
    )
  );
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && popup.classList.contains("popup_opened")) {
      closePopup(popup);
      inputElements.forEach((inputElement) =>
      hideInputError(
        inputElement,
        inputElementErrorClass,
        errorElementActiveClass
      )
    );
    }
  });
};

/* Валидация всех форм */
enableValidation(validationConfig);

/* Реализация всех способов закрытия попапов */
popups.forEach((popup) => closePopupByDifWays(popup, validationConfig));
