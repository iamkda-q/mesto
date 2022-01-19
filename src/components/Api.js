class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _fetch(method = "GET") {
    return fetch(this.baseUrl, {
      headers: this.headers,
      method: method
    })
  }

/*   getInitialCards() {

  } */

  getInitialUserInfo() {
    return this._fetch()
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


  // другие методы работы с API
}

export default Api;

