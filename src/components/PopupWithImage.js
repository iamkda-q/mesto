import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(photoLink, figCaption) {
    this._photo = this._popup.querySelector(".popup__photo");
    this._photoFigcaption = this._popup.querySelector(".popup__figcaption");
    this._photo.src = photoLink;
    this._photo.alt = figCaption;
    this._photoFigcaption.textContent = figCaption;
    super.open();
  }

}
