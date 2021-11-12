'use strict' /* :D */

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
  let galleryElement = galleryItem.querySelector('.gallery__element').cloneNode(true);
  let galleryPhoto = galleryElement.querySelector('.gallery__photo');
  let galleryFigCaption = galleryElement.querySelector('.gallery__figcaption');
  let galleryLike = galleryElement.querySelector('.gallery__like');
  let galleryTrash = galleryElement.querySelector('.gallery__trash');
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



