export default class UserInfo {
  constructor({nameSelector, vocationSelector}) {
    this._name = document.querySelector(nameSelector);
    this._vocation = document.querySelector(vocationSelector);
  }

  getUserInfo() {
    return {name: this._name.textContent, vocation: this._vocation.textContent};
  }

  setUserInfo(name, vocation) {
    this._name.textContent = name;
    this._vocation.textContent = vocation;
    this._name.title = name;
    this._vocation.title = vocation;
  }
}
