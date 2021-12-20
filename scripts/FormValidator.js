export class FormValidator {
  constructor(classes, form) {
    this._inputElement = classes.inputElement;
    this._submitButton = classes.submitButton;
    this._submitButtonDisableClass = classes.submitButtonDisableClass;
    this._inputElementErrorClass = classes.inputElementErrorClass;
    this._errorElementActiveClass = classes.errorElementActiveClass;
    this._cancelButton = classes.cancelButton;
    this._form = form;
  }

  _setEventListener() {
    this._inputElements = this._form.querySelectorAll(this._inputElement);
    this._saveButton = this._form.querySelector(this._submitButton);
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(inputElement);
        this._toggleSaveButton();
      });
      this._toggleSaveButton();
    });
  }

  _checkValidity(inputElement) {
    if (inputElement.validity.valid) this._hideInputError(inputElement)
    else this._showInputError(inputElement);
  }

  _assignErrorText(inputElement) {
    return inputElement
      .closest("form")
      .querySelector(`.${inputElement.id}-error`);
  }

  _hideInputError(inputElement) {
    const errorText = this._assignErrorText(inputElement);
    errorText.classList.remove(this._errorElementActiveClass);
    errorText.textContent = "";
    inputElement.classList.remove(this._inputElementErrorClass);
  }

  _showInputError(inputElement) {
    const errorText = this._assignErrorText(inputElement);
    errorText.classList.add(this._errorElementActiveClass);
    errorText.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputElementErrorClass);
  }

  _toggleSaveButton() {
    if (this._form.checkValidity()) this.activateButton()
    else this.deactivateButton();
  }

  activateButton() {
    this._saveButton.classList.remove(this._submitButtonDisableClass);
    this._saveButton.disabled = false;
  }

  deactivateButton() {
    this._saveButton.classList.add(this._submitButtonDisableClass);
    this._saveButton.disabled = true;
  }

  enableValidation() {
    this._setEventListener();
  }

  resetError() {
    this._inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

}
