'use srrict'

/* Объявление переменных */
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
const popupEditProfile = document.querySelector('#edit-profile');
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close-button');
const formName = popupEditProfile.querySelector('.popup__text_parameter_name');
const formVocation = popupEditProfile.querySelector('.popup__text_parameter_vocation');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__container');

/* Попап добавления фотографии в галерею */
const addPhotoButton = document.querySelector('.profile__edit-gallery-button');
const popupAddPhoto = document.querySelector('#add-photo');
const popupAddPhotoCloseButton = popupAddPhoto.querySelector('.popup__close-button');
const formFigcaption = popupAddPhoto.querySelector('.popup__text_parameter_figcaption');
const formPhotoLink = popupAddPhoto.querySelector('.popup__text_parameter_photo-link');
const popupAddPhotoForm = popupAddPhoto.querySelector('.popup__container');

/* Попап открытия фотографий */
const popupFullPhoto = document.querySelector('#full-photo');
const popupFullPhotoCloseButton = popupFullPhoto.querySelector('.popup__close-button');
const popupFullPhotoPhoto = popupFullPhoto.querySelector('.popup__photo');
const popupFullPhotoFigcaption = popupFullPhoto.querySelector('.popup__figcaption');

const profileName = document.querySelector('.profile__name');
const profileVocation = document.querySelector('.profile__vocation');

const galleryList = document.querySelector('.gallery__list');
const galleryItem = document.querySelector('#gallery-item').content; // template элемента галереи
/* Обработчик изменения данных профиля */

/* открытие popup */
const showPopup = (popup) => {
  switch (popup) {
    case popupEditProfile:
      formName.value = profileName.textContent;
      formVocation.value = profileVocation.textContent;
      break;
    case popupAddPhoto:
      formFigcaption.value = '';
      formPhotoLink.value = '';
      break;
  }
  let CloseButton = popup.querySelector('.popup__close-button');
  CloseButton.addEventListener('click', () => {
    closePopup(popup);
  })
  popup.classList.add('popup_opened');
}

/* закртыие popup */
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

function formPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value.trim() ? formName.value : 'Без имени'; /* .trim() - удаляет пробелы с начала и конца строки, и повторяющиеся пробелы*/
  profileVocation.textContent = formVocation.value.trim() ? formVocation.value : 'Без хобби';
  addTitle(profileName);
  addTitle(profileVocation);
  closePopup(popupEditProfile);
}

function formPopupAddPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  addPhoto (formFigcaption.value, formPhotoLink.value);
  closePopup(popupAddPhoto);
}

/* Добавление title */
function addTitle (titleTarget) {
  titleTarget.title = titleTarget.textContent;
}

/* Функция добавления фотографии на страницу */
function addPhoto (figCaption, photoLink) {
  let galleryElement = galleryItem.querySelector('.gallery__element').cloneNode(true);
  let galleryPhoto = galleryElement.querySelector('.gallery__photo');
  let galleryFigCaption = galleryElement.querySelector('.gallery__figcaption');
  let galleryLike = galleryElement.querySelector('.gallery__like');
  let galleryTrash = galleryElement.querySelector('.gallery__trash');
  galleryPhoto.src = !(photoLink === '') ? photoLink : document.querySelector('.profile__avatar').src;
  galleryPhoto.alt = !(figCaption === '') ? figCaption : profileName.textContent;
  galleryFigCaption.textContent = !(figCaption === '') ? figCaption : profileName.textContent;
  addTitle(galleryFigCaption);
  galleryLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like_active')
  })
  galleryTrash.addEventListener('click', () => {
    galleryElement.remove();
  })
  galleryPhoto.addEventListener('click', () => {
    popupFullPhotoPhoto.src = galleryPhoto.src;
    popupFullPhotoFigcaption.textContent = galleryFigCaption.textContent;
    showPopup(popupFullPhoto);
  })
  galleryList.prepend(galleryElement);
}

/* Добавление шести фотографий из массива */
initialCards.reverse().forEach(item => {
  addPhoto(item.name, item.link);
})

/* Открытие PopupEditProfile */
editProfileButton.addEventListener('click', () => showPopup(popupEditProfile));

/* Открытие popupAddPhoto */
addPhotoButton.addEventListener('click', () => showPopup(popupAddPhoto));

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener('submit', formPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener('submit', formPopupAddPhoto);



