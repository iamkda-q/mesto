export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._setEscapeClose = this._setEscapeClose.bind(this);
    this._popupCloseButton = this._popup.querySelector(".popup__close-button");
    this._popupContainer = this._popup.querySelector(".popup__container");
  }

  open() {
    document.addEventListener("keydown", this._setEscapeClose);
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._setEscapeClose);
  }

  _setEscapeClose(evt) {
    if (evt.key === "Escape") this.close();
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popupContainer.addEventListener("mousedown", (evt) => {
      evt.stopPropagation();
    });
    this._popup.addEventListener("mousedown", () => {
      this.close();
    });
  }
}
