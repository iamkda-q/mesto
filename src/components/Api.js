class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _fetch(cont, method = "GET") {
    return fetch(`${this._baseUrl}${cont}`, {
      headers: this._headers,
      method: method
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      console.log("res not ok")
    })
    .catch(res => {
      console.log(`Ошибка ${res.status}`)
    })
  }

  getInitialCards() {
    return this._fetch("cards")
  }

  getInitialUserInfo() {
    return this._fetch("users/me")
  }

  // другие методы работы с API
}

export default Api;

