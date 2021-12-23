export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._handleEscClose();
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._setEscapeClose);
  }

  _handleEscClose() {
    this._setEscapeClose = (evt) => {
      if (evt.key === "Escape") this.close();
    };
    document.addEventListener("keydown", this._setEscapeClose);
  }

  setEventListeners() {
    this._popupCloseButton = this._popup.querySelector(".popup__close-button");
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popupContainer = this._popup.querySelector(".popup__container");
    this._popupContainer.addEventListener("mousedown", (evt) => {
      evt.stopPropagation();
    });
    this._popup.addEventListener("mousedown", () => {
      this.close();
    });
  }
}
