/* Массив с начальными карточками */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
/* Попап изменения данных о себе любимом */
const editProfileButton = document.querySelector('.profile__edit-profile-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close-button');
const formName = popupEditProfile.querySelector('.popup__text_parameter_name');
const formVocation = popupEditProfile.querySelector('.popup__text_parameter_vocation');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__container');

/* Попап добавления фотографии в галерею */
const addPhotoButton = document.querySelector('.profile__edit-gallery-button');
const popupAddPhoto = document.querySelector('.popup_add-photo');
const popupAddPhotoCloseButton = popupAddPhoto.querySelector('.popup__close-button');
const formFigcaption = popupAddPhoto.querySelector('.popup__text_parameter_figcaption');
const formPhotoLink = popupAddPhoto.querySelector('.popup__text_parameter_photo-link');
const popupAddPhotoForm = popupAddPhoto.querySelector('.popup__container');

/* Попап открытия фотографий */
const popupFullPhoto = document.querySelector('.popup_full-photo');
const popupFullPhotoCloseButton = popupFullPhoto.querySelector('.popup__close-button');
const popupFullPhotoPhoto = popupFullPhoto.querySelector('.popup__photo');
const popupFullPhotoFigcaption = popupFullPhoto.querySelector('.popup__figcaption');

const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');

const galleryList = document.querySelector('.gallery__list');
const galleryItem = document.querySelector('#gallery-item').content; // template элемента галереи
