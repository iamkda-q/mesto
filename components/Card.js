export default class Card {
  constructor(data, cardSelector, showPopup) {
    this._figCaption = data.name;
    this._photoLink = data.link;
    this._cardSelector = cardSelector;
    this._showPopup = showPopup;
  }

  _getTemplateCard() {
    const galleryElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__element")
      .cloneNode(true);
    return galleryElement;
  }

   _setEventListeners() {
    this._galleryTrash.addEventListener("click", () => {
      this._galleryElement.remove();
      this._galleryElement = null;
    });

    this._galleryLike.addEventListener("click", (evt) =>
      evt.target.classList.toggle("gallery__like_active")
    );

    this._galleryPhoto.addEventListener("click", () => {
      this._showPopup(this._photoLink, this._figCaption);
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
