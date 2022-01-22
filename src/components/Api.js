class Api {
  constructor(options, serverErrors) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._serverErrors = serverErrors;
  }

  _errorHandler(errorStatus) {
    if (Object.keys(this._serverErrors).includes(String(errorStatus))) {
      return this._serverErrors[errorStatus];
    }
    return ("Ошибка.");
  }

  _fetch(cont, method = "GET", body = undefined) {
    return fetch(`${this._baseUrl}${cont}`, {
      headers: this._headers,
      method: method,
      body: JSON.stringify(body)
    })
    .then(res => {
      if (res.ok) {
        if (method === "GET") {
          return res.json()
        }
        return res
      }
      return Promise.reject(res);
    })
    .catch(res => {
      console.log(`${this._errorHandler(res.status)} Номер ошибки - ${ (res.status) ? res.status : "неизвестен"}. Всего хорошего!`);
    })
  }

  getInitialCards() {
    return this._fetch("cards")
  }

  getInitialUserInfo() {
    return this._fetch("users/me")
  }

  setUserInfo(body) {
    return this._fetch("users/me", "PATCH", body)
  }

  setNewCard(body) {
    return this._fetch("cards", "POST", body)
  }

  deleteCard(cardID) {
    return (
      this._fetch(`cards/${cardID}`, "DELETE")
    )
  }

  setLike(cardID) {
    return (
      this._fetch(`cards/${cardID}/likes`, "PUT")
    )
  }

  removeLike(cardID) {
    return (
      this._fetch(`cards/${cardID}/likes`, "DELETE")
    )
  }

  updateAvatar(body) {
    return (
      this._fetch(`users/me/avatar`, "PATCH", body)
    )
  }
}

export default Api;

