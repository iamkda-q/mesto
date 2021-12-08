import { validationConfig } from "./constants.js";

const returnSetEscapeCLose = (popup) => {
  return function setEscapeCLose(evt) {
    if (evt.key === "Escape" && popup.classList.contains("popup_opened")) {
      closeDifPopupType(popup);
    }
  }
};

let escapeDown;

/* открытие/закрытие popup */
export const showPopup = (popup) => {
  escapeDown = returnSetEscapeCLose(popup);
  document.addEventListener("keydown", escapeDown);
  popup.classList.add("popup_opened");
};

const closePopupNotForm = (popup) => {
  document.removeEventListener("keydown", escapeDown);
  popup.classList.remove("popup_opened");
};

export const closePopupForm = (popup, config) => {
  const { inputElementErrorClass, errorElementActiveClass } = config;
  const inputElements = popup.querySelectorAll(".popup__text");
  inputElements.forEach((inputElement) =>
    hideInputError(
      inputElement,
      inputElementErrorClass,
      errorElementActiveClass
    )
  );
  closePopupNotForm(popup);
};

const closeDifPopupType = (popup) => {
  if (popup.querySelector(".popup__text") != null) {
    closePopupForm(popup, validationConfig);
  } else {
    closePopupNotForm(popup);
  }
};

export const setPopupCloseListeners = (popup) => {
  const popupCloseButton = popup.querySelector(".popup__close-button");
  popupCloseButton.addEventListener("click", () => {
    closeDifPopupType(popup);
  });

  const popupContainer = popup.querySelector(".popup__container");

  popupContainer.addEventListener("mousedown", (evt) => {
    evt.stopPropagation();
  });
  popup.addEventListener("mousedown", () => {
    closeDifPopupType(popup);
  });
};


