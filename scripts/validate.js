const setEventListener = (
  form,
  inputElement,
  submitButton,
  submitButtonDisableClass,
  inputElementErrorClass,
  errorElementActiveClass,
) => {
  const inputElements = form.querySelectorAll(inputElement);
  const saveButton = form.querySelector(submitButton);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkValidity(
        inputElement,
        inputElementErrorClass,
        errorElementActiveClass
      );
      toggleSaveButton(form, saveButton, submitButtonDisableClass);
    });
    toggleSaveButton(form, saveButton, submitButtonDisableClass);
  });
};

const checkValidity = (
  inputElement,
  inputElementErrorClass,
  errorElementActiveClass
) => {
  if (inputElement.validity.valid) {
    hideInputError(
      inputElement,
      inputElementErrorClass,
      errorElementActiveClass
    );
  } else {
    showInputError(
      inputElement,
      inputElementErrorClass,
      errorElementActiveClass
    );
  }
};

const assignErrorText = (inputElement) => {
  return inputElement
    .closest("form")
    .querySelector(`.${inputElement.id}-error`);
};

const hideInputError = (
  inputElement,
  inputElementErrorClass,
  errorElementActiveClass
) => {
  const errorText = assignErrorText(inputElement);
  errorText.classList.remove(errorElementActiveClass);
  errorText.textContent = "";
  inputElement.classList.remove(inputElementErrorClass);
};

const showInputError = (
  inputElement,
  inputElementErrorClass,
  errorElementActiveClass
) => {
  const errorText = assignErrorText(inputElement);
  errorText.classList.add(errorElementActiveClass);
  errorText.textContent = inputElement.validationMessage;
  inputElement.classList.add(inputElementErrorClass);
};

const toggleSaveButton = (
  formElement,
  saveButton,
  submitButtonDisableClass
) => {
  if (formElement.checkValidity()) {
    saveButton.classList.remove(submitButtonDisableClass);
    saveButton.disabled = false;
  } else {
    saveButton.classList.add(submitButtonDisableClass);
    saveButton.disabled = true;
  }
};

const enableValidation = (config) => {
  const {
    formElement,
    inputElement,
    submitButton,
    submitButtonDisableClass,
    inputElementErrorClass,
    errorElementActiveClass,
  } = config;

  const forms = document.querySelectorAll(formElement);
  forms.forEach((form) => {
    setEventListener(
      form,
      inputElement,
      submitButton,
      submitButtonDisableClass,
      inputElementErrorClass,
      errorElementActiveClass,
    );
  });
};
