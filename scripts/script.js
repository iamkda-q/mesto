'use strict' /* :D */

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

/* Добавление title */
function addTitleForContent (titleTarget) {
  titleTarget.title = titleTarget.textContent;
}

/* открытие/закрытие popup */
const showPopup = (popup) => popup.classList.add('popup_opened');
const closePopup = (popup) => popup.classList.remove('popup_opened');

/* открытие popup EditProfile*/
const showPopupEditProfile = () => {
  formName.value = profileName.textContent;
  formVocation.value = profileVocation.textContent;
  showPopup(popupEditProfile);
}

/* открытие popup AddPhoto*/
const showPopupAddPhoto = () => {
  formFigcaption.value = '';
  formPhotoLink.value = '';
  showPopup(popupAddPhoto);
}

function cancelSubmitFormPopupEditProfile(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  profileName.textContent = formName.value.trim() ? formName.value : 'Без имени'; /* .trim() - удаляет пробелы с начала и конца строки, и повторяющиеся пробелы*/
  profileVocation.textContent = formVocation.value.trim() ? formVocation.value : 'Без хобби';
  addTitleForContent(profileName);
  addTitleForContent(profileVocation);
  closePopup(popupEditProfile);
}

/* Функция добавления фотографии на страницу с открытием попапа FullPhoto */
function addPhoto (figCaption, photoLink) {
  const galleryElement = galleryItem.querySelector('.gallery__element').cloneNode(true);
  const galleryPhoto = galleryElement.querySelector('.gallery__photo');
  const galleryFigCaption = galleryElement.querySelector('.gallery__figcaption');
  const galleryLike = galleryElement.querySelector('.gallery__like');
  const galleryTrash = galleryElement.querySelector('.gallery__trash');
  galleryPhoto.src = !(photoLink === '') ? photoLink : document.querySelector('.profile__avatar').src;
  galleryPhoto.alt = !(figCaption === '') ? figCaption : profileName.textContent;
  galleryFigCaption.textContent = !(figCaption === '') ? figCaption : profileName.textContent;
  addTitleForContent(galleryFigCaption);
  galleryLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like_active')
  })
  galleryTrash.addEventListener('click', () => {
    galleryElement.remove();
  })
  galleryPhoto.addEventListener('click', () => {
    popupFullPhotoPhoto.src = galleryPhoto.src;
    popupFullPhotoPhoto.alt = galleryFigCaption.textContent;
    popupFullPhotoFigcaption.textContent = galleryFigCaption.textContent;
    showPopup(popupFullPhoto);
  })
  galleryList.prepend(galleryElement);
}

function cancelSubmitFormPopupAddPhoto(evt) {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  addPhoto (formFigcaption.value, formPhotoLink.value);
  closePopup(popupAddPhoto);
}

/* Закрытие PopupEditProfile */
popupFullPhotoCloseButton.addEventListener('click', () => closePopup(popupFullPhoto));

/* Добавление шести фотографий из массива */
initialCards.forEach(item => {
  addPhoto(item.name, item.link);
})

/* Открытие/закрытие PopupEditProfile */
editProfileButton.addEventListener('click', () => showPopupEditProfile());
popupEditProfileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));

/* Открытие/закрытие popupAddPhoto */
addPhotoButton.addEventListener('click', () => showPopupAddPhoto());
popupAddPhotoCloseButton.addEventListener('click', () => closePopup(popupAddPhoto));

/* Сохранение данных о пользователе*/
popupEditProfileForm.addEventListener('submit', cancelSubmitFormPopupEditProfile);

/* Добавление фотографии в галерею*/
popupAddPhotoForm.addEventListener('submit', cancelSubmitFormPopupAddPhoto);



