(()=>{"use strict";var e=document.querySelector(".profile__edit-profile-button"),t=".popup_edit-profile",n=document.querySelector(t).querySelector(".popup__form"),r=document.querySelector(".popup__text_parameter_name"),o=document.querySelector(".popup__text_parameter_vocation"),i=document.querySelector(".profile__edit-gallery-button"),u=".popup_add-photo",a=document.querySelector(u).querySelector(".popup__form"),c=".popup_avatar",s=document.querySelector(c).querySelector(".popup__form"),l={inputElement:".popup__text",submitButton:".popup__save-button",submitButtonDisableClass:"popup__save-button_disable",inputElementErrorClass:"popup__text_error",errorElementActiveClass:"popup__error-text_active",cancelButton:".popup__close-button"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._figCaption=t.name,this._photoLink=t.link,this._id=t._id,this._likes=t.likes.length,this._cardSelector=n,this._showPopup=r,this._showPopupAreYouSure=o,this._removeCard=this._removeCard.bind(this),this._setLike=i,this._removeLike=u}var t,n;return t=e,(n=[{key:"_getTemplateCard",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".gallery__element").cloneNode(!0)}},{key:"_setEventListeners",value:function(e){var t=this;e&&this._galleryTrash.addEventListener("click",(function(){t._showPopupAreYouSure(t._removeCard)})),this._galleryLike.addEventListener("click",(function(e){Array.from(e.target.classList).includes("gallery__like_active")?t._removeLike(t._id).then((function(e){return e.json()})).then((function(n){t._likeCount.textContent=n.likes.length,e.target.classList.toggle("gallery__like_active")})):t._setLike(t._id).then((function(e){return e.json()})).then((function(n){t._likeCount.textContent=n.likes.length,e.target.classList.toggle("gallery__like_active")}))})),this._galleryPhoto.addEventListener("click",(function(){t._showPopup(t._photoLink,t._figCaption)}))}},{key:"generateCard",value:function(e,t){return this._galleryElement=this._getTemplateCard(),this._galleryPhoto=this._galleryElement.querySelector(".gallery__photo"),this._galleryFigCaption=this._galleryElement.querySelector(".gallery__figcaption"),this._likeCount=this._galleryElement.querySelector(".gallery__like-count"),this._galleryLike=this._galleryElement.querySelector(".gallery__like"),e?this._galleryTrash=this._galleryElement.querySelector(".gallery__trash"):this._galleryElement.querySelector(".gallery__trash").remove(),t&&this._galleryLike.classList.add("gallery__like_active"),this._galleryPhoto.src=this._photoLink,this._galleryPhoto.alt=this._figCaption,this._galleryFigCaption.textContent=this._figCaption,this._galleryFigCaption.title=this._figCaption,this._likeCount.textContent=this._likes,this._setEventListeners(e),this._galleryElement}},{key:"_removeCard",value:function(){return this._galleryElement.remove(),this._galleryElement=null,this._id}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputElement=t.inputElement,this._submitButton=t.submitButton,this._submitButtonDisableClass=t.submitButtonDisableClass,this._inputElementErrorClass=t.inputElementErrorClass,this._errorElementActiveClass=t.errorElementActiveClass,this._cancelButton=t.cancelButton,this._form=n}var t,n;return t=e,(n=[{key:"_setEventListener",value:function(){var e=this;this._inputElements=this._form.querySelectorAll(this._inputElement),this._saveButton=this._form.querySelector(this._submitButton),this._inputElements.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._toggleSaveButton()})),e._toggleSaveButton()}))}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_assignErrorText",value:function(e){return e.closest("form").querySelector(".".concat(e.id,"-error"))}},{key:"_hideInputError",value:function(e){var t=this._assignErrorText(e);t.classList.remove(this._errorElementActiveClass),t.textContent="",e.classList.remove(this._inputElementErrorClass)}},{key:"_showInputError",value:function(e){var t=this._assignErrorText(e);t.classList.add(this._errorElementActiveClass),t.textContent=e.validationMessage,e.classList.add(this._inputElementErrorClass)}},{key:"_toggleSaveButton",value:function(){this._form.checkValidity()?this.activateButton():this.deactivateButton()}},{key:"activateButton",value:function(){this._saveButton.classList.remove(this._submitButtonDisableClass),this._saveButton.disabled=!1}},{key:"deactivateButton",value:function(){this._saveButton.classList.add(this._submitButtonDisableClass),this._saveButton.disabled=!0}},{key:"enableValidation",value:function(){this._setEventListener()}},{key:"resetError",value:function(){var e=this;this._inputElements.forEach((function(t){e._hideInputError(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=t,this._containerSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._containerSelector.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e.renderer(t)}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._setEscapeClose=this._setEscapeClose.bind(this),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._popupContainer=this._popup.querySelector(".popup__container"),this._saveButton=this._popup.querySelector(".popup__save-button")}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._setEscapeClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._setEscapeClose)}},{key:"_setEscapeClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.close()})),this._popupContainer.addEventListener("mousedown",(function(e){e.stopPropagation()})),this._popup.addEventListener("mousedown",(function(){e.close()}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function C(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._photo=t._popup.querySelector(".popup__photo"),t._photoFigcaption=t._popup.querySelector(".popup__figcaption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._photo.src=e,this._photo.alt=t,this._photoFigcaption.textContent=t,E(S(u.prototype),"open",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function q(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._popupForm=n._popup.querySelector(".popup__form"),n}return t=u,n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._popup.querySelectorAll(".popup__text").forEach((function(t){return e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;j(x(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){return e._submitForm(t,e._getInputValues())}))}},{key:"close",value:function(){j(x(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._saveButton.textContent=e?"Сохранение...":"Сохранить"}}],n&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameSelector,r=t.vocationSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._vocation=document.querySelector(r),this.avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,vocation:this._vocation.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.vocation,r=e.id;this._name.textContent=t,this._vocation.textContent=n,this._name.title=t,this._vocation.title=n,this._id=r}},{key:"setAvatar",value:function(e){this.avatar.src=e}},{key:"getID",value:function(){return this._id}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers,this._serverErrors=n}var t,n;return t=e,n=[{key:"_errorHandler",value:function(e){return Object.keys(this._serverErrors).includes(String(e))?this._serverErrors[e]:"Ошибка."}},{key:"_fetch",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers,method:n,body:JSON.stringify(r)}).then((function(e){return e.ok?"GET"===n?e.json():e:Promise.reject(e)})).catch((function(e){console.log("".concat(t._errorHandler(e.status)," Номер ошибки - ").concat(e.status?e.status:"неизвестен",". Всего хорошего!"))}))}},{key:"getInitialCards",value:function(){return this._fetch("cards")}},{key:"getInitialUserInfo",value:function(){return this._fetch("users/me")}},{key:"setUserInfo",value:function(e){return this._fetch("users/me","PATCH",e)}},{key:"setNewCard",value:function(e){return this._fetch("cards","POST",e)}},{key:"deleteCard",value:function(e){return this._fetch("cards/".concat(e),"DELETE")}},{key:"setLike",value:function(e){return this._fetch("cards/".concat(e,"/likes"),"PUT")}},{key:"removeLike",value:function(e){return this._fetch("cards/".concat(e,"/likes"),"DELETE")}},{key:"updateAvatar",value:function(e){return this._fetch("users/me/avatar","PATCH",e)}}],n&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},H.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}function G(e,t){return G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},G(e,t)}function Y(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&G(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Y(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._popupForm=n._popup.querySelector(".popup__form"),n}return t=u,n=[{key:"open",value:function(e){H(z(u.prototype),"open",this).call(this),this._func=e}},{key:"setEventListeners",value:function(){var e=this;H(z(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){return e._submitForm(t,e._func)}))}},{key:"close",value:function(){H(z(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._saveButton.textContent=e?"Ну тогда удаляем...":"Абсолютли"}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m),M=new D({nameSelector:".profile__name",vocationSelector:".profile__vocation",avatarSelector:".profile__avatar"}),K=new O(".popup_full-photo"),Q=new R(t,(function(e,t){var n=t.name,r=t.vocation;e.preventDefault(),Q.renderLoading(),ae.setUserInfo({name:n,about:r}).then((function(){M.setUserInfo({name:n,vocation:r})})).finally((function(){Q.close(),setTimeout((function(){Q.renderLoading(!1)}),200)}))})),W=new y(l,n),X=new J(".popup_are-you-sure",(function(e,t,n){e.preventDefault(),X.renderLoading(),ae.deleteCard(t()).finally((function(){X.close(),setTimeout((function(){X.renderLoading(!1)}),200)}))})),Z=K.open.bind(K),$=X.open.bind(X),ee=function(e){return ae.setLike(e)},te=function(e){return ae.removeLike(e)},ne=new v((function(e,t,n){ne.addItem(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;return new p(e,"#gallery-item",Z,$,ee,te).generateCard(t,n)}(e,t,n))}),".gallery__list"),re=new R(u,(function(e,t,n){e.preventDefault(),re.renderLoading(),ae.setNewCard(t).then((function(e){return e.json()})).then((function(e){ne.renderer(e)})).finally((function(){re.close(),setTimeout((function(){re.renderLoading(!1)}),200)}))})),oe=new y(l,a),ie=new R(c,(function(e,t){e.preventDefault(),ie.renderLoading(),ae.updateAvatar(t).then((function(e){return e.json()})).then((function(e){M.setAvatar(e.avatar)})).finally((function(){ie.close(),setTimeout((function(){ie.renderLoading(!1)}),200)}))})),ue=new y(l,s);[Q,re,K,X,ie].forEach((function(e){return e.setEventListeners()})),[W,oe,ue].forEach((function(e){return e.enableValidation()})),e.addEventListener("click",(function(){var e=M.getUserInfo(),t=[e.name,e.vocation];r.value=t[0],o.value=t[1],W.activateButton(),W.resetError(),Q.open()})),i.addEventListener("click",(function(){oe.deactivateButton(),oe.resetError(),re.open()})),M.avatar.addEventListener("click",(function(){ue.deactivateButton(),ue.resetError(),ie.open()}));var ae=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-34/",headers:{authorization:"be33cdb8-be40-4c20-b8a9-d95898749c16","Content-Type":"application/json"}},{401:"Извините, но по какой-то причине вам отказано в доступе.",403:"Извините, но по какой-то причине вам отказано в доступе.",404:"Запрашиваемый вами ресурс отсутствует.",500:"Внутренняя ошибка сервера."});Promise.all([ae.getInitialUserInfo(),ae.getInitialCards()]).then((function(e){M.setUserInfo({name:e[0].name,vocation:e[0].about,id:e[0]._id}),M.setAvatar(e[0].avatar),e[1].forEach((function(e){return ne.renderer(e,e.owner._id===M.getID(),Boolean(e.likes.find((function(e){return e._id==M.getID()}))))}))}))})();