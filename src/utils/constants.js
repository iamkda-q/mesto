/* Попап изменения данных о себе любимом */
const editProfileButton = document.querySelector(
  ".profile__edit-profile-button"
);
const popupEditProfileSelector = ".popup_edit-profile";
const popupEditProfileForm = document.querySelector(popupEditProfileSelector).querySelector(".popup__form");

// Форма с информацией о пользователе
const formName = document.querySelector(".popup__text_parameter_name");
const formVocation = document.querySelector(
  ".popup__text_parameter_vocation"
);

/* Попап добавления фотографий в галерею */
const addPhotoButton = document.querySelector(".profile__edit-gallery-button");
const popupAddPhotoSelector = ".popup_add-photo";
const popupAddPhotoForm = document.querySelector(popupAddPhotoSelector).querySelector(".popup__form");

/* Попап открытия фотографий */
const popupFullPhotoSelector = ".popup_full-photo";

/* Попап уверености */
const popupAreYouSureSelector = ".popup_are-you-sure";

/* Попап обновления аватара */
const popupUpdateAvatarSelector = ".popup_avatar";
const popupUpdateAvatarForm = document.querySelector(popupUpdateAvatarSelector).querySelector(".popup__form");

// Информация о пользователе
const profileNameSelector = ".profile__name";
const profileVocationSelector = ".profile__vocation";
const profileAvatar = ".profile__avatar";

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

const serverErrors = {
  401: "Извините, но по какой-то причине вам отказано в доступе.",
  403: "Извините, но по какой-то причине вам отказано в доступе.",
  404: "Запрашиваемый вами ресурс отсутствует.",
  500: "Внутренняя ошибка сервера.",
};

export {editProfileButton, popupEditProfileSelector,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhotoSelector, popupAddPhotoForm,
  popupFullPhotoSelector, profileNameSelector, profileVocationSelector, galleryList, validationConfig, profileAvatar,
  popupAreYouSureSelector, popupUpdateAvatarSelector, popupUpdateAvatarForm, serverErrors};
