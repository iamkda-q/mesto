"use strict";

import './index.css';

import {editProfileButton, popupEditProfileSelector,
  formName, formVocation, popupEditProfileForm, addPhotoButton,
  popupAddPhotoSelector, popupAddPhotoForm,
  profileNameSelector, profileVocationSelector, popupFullPhotoSelector,
  galleryList, validationConfig, profileAvatar,
  popupAreYouSureSelector, popupUpdateAvatarSelector,
  popupUpdateAvatarForm, serverErrors} from "../utils/constants.js";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"
import PopupAreYouSure from "../components/PopupAreYouSure.js";

const userInfo = new UserInfo({nameSelector : profileNameSelector, vocationSelector : profileVocationSelector, avatarSelector: profileAvatar});

const popupFullPhotoXXL = new PopupWithImage(popupFullPhotoSelector);

function showLoading(target, info) {
  const previousValue = target.textContent;
  target.textContent = info;
  return previousValue;
};

function hideLoading(target, previousValue) {
  setTimeout(() => {
    target.textContent = previousValue;
  }, 200) // чтобы текст кнопки обновился только после того, как пропадёт попап
};

const popupEditProfile = new PopupWithForm(popupEditProfileSelector, (evt, {name, vocation}, submitInfo) => {
    evt.preventDefault(); // отменяет стандартную отправку формы.
    const previousValue = showLoading(submitInfo, "Сохранение...");
    api.setUserInfo({name, about: vocation})
    .then(() => {
      userInfo.setUserInfo({name, vocation})
    })
    .finally(() => {
      popupEditProfile.close();
      hideLoading(submitInfo, previousValue);
    });
});

const popupEditProfileFormValidator = new FormValidator(validationConfig, popupEditProfileForm);

const popupAreYouSure = new PopupAreYouSure(popupAreYouSureSelector, (evt, deleteCard, submitInfo) => {
  evt.preventDefault();
  const previousValue = showLoading(submitInfo, "Ну тогда удаляем...");
  api.deleteCard(deleteCard())
  .finally(() => {
    popupAreYouSure.close();
    hideLoading(submitInfo, previousValue);
  });
});

const handleCardClick = popupFullPhotoXXL.open.bind(popupFullPhotoXXL);

const handleTrashClick = popupAreYouSure.open.bind(popupAreYouSure);

const setLike = (id) => api.setLike(id);
const removeLike = (id) => api.removeLike(id);

function createCard(item, myCard = true, myLike) {
  const cardTemplate = new Card(item, "#gallery-item", handleCardClick, handleTrashClick, setLike, removeLike);
  const card = cardTemplate.generateCard(myCard, myLike);
  return card;
}

// Создание "слоя" класса для отрисовки элементов в выбранном контейнере
const сards = new Section((item, myCard, myLike) => {
  сards.addItem(createCard(item, myCard, myLike)); // myCard - флаг для условного рендеринга "моих" или "чужих" карточек
}, galleryList);

const popupAddPhoto = new PopupWithForm(popupAddPhotoSelector, (evt, inputList, submitInfo) => {
  evt.preventDefault(); // отменяет стандартную отправку формы.
  const previousValue = showLoading(submitInfo, "Создание...");
  api.setNewCard(inputList)
    .then(res => res.json())
    .then(res => {
      сards.renderer(res);
    })
    .finally(() => {
      popupAddPhoto.close();
      hideLoading(submitInfo, previousValue);
    });

});

const popupAddPhotoFormValidator = new FormValidator(validationConfig, popupAddPhotoForm);

const popupUpdateAvatar = new PopupWithForm(popupUpdateAvatarSelector, (evt, inputList, submitInfo) => {
  evt.preventDefault();
  const previousValue = showLoading(submitInfo, "Обновление...");
  api.updateAvatar(inputList)
  .then(res => res.json())
  .then(res => {
    userInfo.setAvatar(res.avatar)
  })
  .finally(() => {
    popupUpdateAvatar.close();
    hideLoading(submitInfo, previousValue);
  });
});

const popupUpdateAvatarFormValidator = new FormValidator(validationConfig, popupUpdateAvatarForm);

[popupEditProfile, popupAddPhoto, popupFullPhotoXXL, popupAreYouSure, popupUpdateAvatar].forEach(popup => popup.setEventListeners());

[popupEditProfileFormValidator, popupAddPhotoFormValidator, popupUpdateAvatarFormValidator].forEach(formValidator => formValidator.enableValidation());

/* Открытие PopupEditProfile */
editProfileButton.addEventListener("click", () => {
  const userInfoObject = userInfo.getUserInfo();
  [formName.value, formVocation.value] = [userInfoObject.name, userInfoObject.vocation];
  popupEditProfileFormValidator.activateButton();
  popupEditProfileFormValidator.resetError();
  popupEditProfile.open();
});

/* Открытие popupAddPhoto */
addPhotoButton.addEventListener("click", () => {
  popupAddPhotoFormValidator.deactivateButton();
  popupAddPhotoFormValidator.resetError();
  popupAddPhoto.open();
});

/* Открытие popupAvatar */
userInfo.avatar.addEventListener("click", () => {
  popupUpdateAvatarFormValidator.deactivateButton();
  popupUpdateAvatarFormValidator.resetError();
  popupUpdateAvatar.open();
});

/* Создание переменной для запросов на сервер*/
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34/',
  headers: {
    authorization: 'be33cdb8-be40-4c20-b8a9-d95898749c16',
    'Content-Type': 'application/json'
  }
}, serverErrors);

/* Загрузка начальных данных о пользователе и карточек с сервера*/
Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
  .then(res => {
    userInfo.setUserInfo({
      name: res[0].name,
      vocation: res[0].about,
      id: res[0]._id
    })
    userInfo.setAvatar(res[0].avatar)
    res[1].forEach(item => сards.renderer(
      item,
      item.owner._id === userInfo.getID() ? true : false,
      Boolean(item.likes.find(item => item._id == userInfo.getID()))
    ));
  })



