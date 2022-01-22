export default class UserInfo {
  constructor({nameSelector, vocationSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._vocation = document.querySelector(vocationSelector);
    this.avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {name: this._name.textContent, vocation: this._vocation.textContent};
  }

  setUserInfo({name, vocation, id}) {
    this._name.textContent = name;
    this._vocation.textContent = vocation;
    this._name.title = name;
    this._vocation.title = vocation;
    this._id = id;
  }

  setAvatar(avatarURL) {
    this.avatar.src = avatarURL;
  }

  getID() {return this._id}
}
