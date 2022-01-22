import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputValues = {};
    this._popup.querySelectorAll(".popup__text").forEach(input => this._inputValues[input.name] = input.value);
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => this._submitForm(evt, this._getInputValues()));
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  renderLoading(isLoading = true) {
    if (isLoading) {
      this._saveButton.textContent = "Сохранение...";
    } else {
      this._saveButton.textContent = "Сохранить";
    }
  }

}
