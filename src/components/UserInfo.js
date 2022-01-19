export default class UserInfo {
  constructor({nameSelector, vocationSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._vocation = document.querySelector(vocationSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {name: this._name.textContent, vocation: this._vocation.textContent};
  }

  setUserInfo({name, vocation}) {
    this._name.textContent = name;
    this._vocation.textContent = vocation;
    this._name.title = name;
    this._vocation.title = vocation;
  }

  setAvatar(avatar) {
    this._avatar.src = avatar;
  }
}
