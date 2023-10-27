class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _doFetch = async ({ url, method, options, data }) => {
    let res;
    if (data) {
      res = await fetch(url, {
        method,
        headers: this._headers,
        body: JSON.stringify(data),
        ...options,
      });
    } else {
      res = await fetch(url, {
        method,
        headers: this._headers,
        ...options,
      });
    }

    if (!res.ok) {
      throw new Error(`Fail to fetch - ${url}, status: ${res.status}`);
    }
    return res.json();
  }

}

export default Api;