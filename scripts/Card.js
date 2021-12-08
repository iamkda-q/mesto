import { popupFullPhoto, popupFullPhotoPhoto, popupFullPhotoFigcaption } from "./constants.js";

import { showPopup } from "./popups.js";

export class Card {
  constructor(data, cardClass) {
    this._figCaption = data.name;
    this._photoLink = data.link;
    this._cardClass = cardClass;
  }

  _getTemplateCard() {
    const galleryElement = document
      .querySelector(this._cardClass)
      .content.querySelector(".gallery__element")
      .cloneNode(true);
    return galleryElement;
  }

  _handleOpenPopup() {
    popupFullPhotoPhoto.src = this._galleryPhoto.src;
    popupFullPhotoPhoto.alt = this._galleryFigCaption.textContent;
    popupFullPhotoFigcaption.textContent = this._galleryFigCaption.textContent;
  }

   _setEventListeners() {
    this._galleryTrash.addEventListener("click", () =>
      this._galleryElement.remove()
    );

    this._galleryLike.addEventListener("click", (evt) =>
      evt.target.classList.toggle("gallery__like_active")
    );

    this._galleryPhoto.addEventListener("click", () => {
      this._handleOpenPopup();
      showPopup(popupFullPhoto);
    });
  }

  generateCard() {
    this._galleryElement = this._getTemplateCard();
    this._galleryPhoto = this._galleryElement.querySelector(".gallery__photo");
    this._galleryFigCaption = this._galleryElement.querySelector(
      ".gallery__figcaption"
    );
    this._galleryLike = this._galleryElement.querySelector(".gallery__like");
    this._galleryTrash = this._galleryElement.querySelector(".gallery__trash");

    this._galleryPhoto.src = this._photoLink;
    this._galleryPhoto.alt = this._figCaption;
    this._galleryFigCaption.textContent = this._figCaption;
    this._galleryFigCaption.title = this._figCaption;

    this._setEventListeners();

    return this._galleryElement;
  }
}
