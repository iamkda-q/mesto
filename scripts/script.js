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

/* закрытие popup EditProfile*/
const closePopupEditProfile = () => {
  addValueForContent(formName, profileName);
  addValueForContent(formVocation, profileVocation);
  closePopup(popupEditProfile);
};

/* Открытие popup AddPhoto*/
const closePopupAddPhoto = () => {
  formFigcaption.value = "";
  formPhotoLink.value = "";
  closePopup(popupAddPhoto);
};

function submitPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value;
  profileVocation.textContent = formVocation.value;
  addTitleForContent(profileName);
  addTitleForContent(profileVocation);
  closePopupEditProfile(popupEditProfile);
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
  closePopupAddPhoto();
}

/* Добавление value в попап, чтобы при первой загрузке кнопка "Сохранить" была активна */
addValueForContent(formName, profileName);
addValueForContent(formVocation, profileVocation);

/* Закрытие PopupFullPhoto */
popupFullPhotoCloseButton.addEventListener("click", () =>
  closePopup(popupFullPhoto)
);

/* Добавление шести фотографий из массива */
initialCards.forEach((item) => {
  addPhoto(item.name, item.link);
});

/* Открытие/закрытие PopupEditProfile */
editProfileButton.addEventListener("click", () => {
  showPopup(popupEditProfile);
  popupEditProfileSaveButton.classList.remove("popup__save-button_disable");
  popupEditProfileSaveButton.disabled = false;
});
popupEditProfileCloseButton.addEventListener("click", () =>
  closePopupEditProfile()
);

/* Открытие/закрытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  showPopup(popupAddPhoto);
  popupAddPhotoSaveButton.classList.add("popup__save-button_disable");
  popupAddPhotoSaveButton.disabled = true;
});

popupAddPhotoCloseButton.addEventListener("click", () => closePopupAddPhoto());

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener("submit", submitPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener("submit", (evt) => {
  submitPopupAddPhoto(evt);
  /*   const saveButton = evt.target.querySelector('.popup__save-button');
  switchOffSaveButton(saveButton); */
});

/* Проставление лайков не по событию каждого лайка, а по всплытию события на галерее-родителе */
galleryList.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("gallery__like")) {
    evt.target.classList.toggle("gallery__like_active");
  }
});

enableValidation(validationConfig);
