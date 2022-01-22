export default class Card {
  constructor(data, cardSelector, showPopup, showPopupAreYouSure, setLike, removeLike) {
    this._figCaption = data.name;
    this._photoLink = data.link;
    this._id = data._id;
    this._likes = data.likes.length;
    this._cardSelector = cardSelector;
    this._showPopup = showPopup;
    this._showPopupAreYouSure = showPopupAreYouSure;
    this._removeCard = this._removeCard.bind(this);
    this._setLike = setLike;
    this._removeLike = removeLike;
  }

  _getTemplateCard() {
    const galleryElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".gallery__element")
      .cloneNode(true);
    return galleryElement;
  }

   _setEventListeners(myCard) {
    if (myCard) {
      this._galleryTrash.addEventListener("click", () => {
        this._showPopupAreYouSure(this._removeCard);
      });
    }

    this._galleryLike.addEventListener("click", (evt) => {
      if (Array.from(evt.target.classList).includes("gallery__like_active")) {
        this._removeLike(this._id)
        .then(res => res.json())
        .then(res => {
          this._likeCount.textContent = res.likes.length;
          evt.target.classList.toggle("gallery__like_active");
        })
      } else {
        this._setLike(this._id)
        .then(res => res.json())
        .then(res => {
          this._likeCount.textContent = res.likes.length;
          evt.target.classList.toggle("gallery__like_active");
        });
      }
    }
    );

    this._galleryPhoto.addEventListener("click", () => {
      this._showPopup(this._photoLink, this._figCaption);
    });
  }

  generateCard(myCard, myLike) {
    this._galleryElement = this._getTemplateCard();
    this._galleryPhoto = this._galleryElement.querySelector(".gallery__photo");
    this._galleryFigCaption = this._galleryElement.querySelector(
      ".gallery__figcaption"
    );
    this._likeCount = this._galleryElement.querySelector(".gallery__like-count");
    this._galleryLike = this._galleryElement.querySelector(".gallery__like");

    if (myCard) {
      this._galleryTrash = this._galleryElement.querySelector(".gallery__trash")
    } else {
      this._galleryElement.querySelector(".gallery__trash").remove();
    }
    if (myLike) this._galleryLike.classList.add("gallery__like_active");
    this._galleryPhoto.src = this._photoLink;
    this._galleryPhoto.alt = this._figCaption;
    this._galleryFigCaption.textContent = this._figCaption;
    this._galleryFigCaption.title = this._figCaption;
    this._likeCount.textContent = this._likes;

    this._setEventListeners(myCard);

    return this._galleryElement;
  }

  _removeCard() {
    this._galleryElement.remove();
    this._galleryElement = null;
    return (this._id);
  }
}

