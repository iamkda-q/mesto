import Popup from "./Popup.js";

export default class PopupAreYouSure extends Popup{
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  open(func) {
    super.open();
    this._func = func;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => this._submitForm(evt, this._func));
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  renderLoading(isLoading = true) {
    if (isLoading) {
      this._saveButton.textContent = "Ну тогда удаляем...";
    } else {
      this._saveButton.textContent = "Абсолютли";
    }
  }
}
