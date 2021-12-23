import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
  }

  _getInputValues() { // по заданию неясно, зачем он нужен, где и как его применять
    this._inputValues = this._popup.querySelectorAll(".popup__text").map((item) => item.value);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".popup__form").addEventListener("submit", this._submitForm);
  }

  close() {
    super.close();
    this._popup.querySelector(".popup__form").reset();
  }
}
