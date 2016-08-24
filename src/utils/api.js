import fetch from 'isomorphic-fetch';
import querystring from 'querystring';

const BASE_URL = window.API_URL;

class HttpError extends Error {
  constructor(status) {
    super();
    this.status = status;
  }
}

function request(method, path, token, data) {
  const options = { method };
  if (token) {
    options.headers = {
      Authorization: `Token ${token}`,
    };
  }
  if (data) {
    options.body = JSON.stringify(data);
  }
  return fetch(`${BASE_URL}${path}`, options)
  .then((res) => {
    if (res.status >= 400) {
      throw new HttpError(res.statue);
    }
    return res.json();
  });
}

const api = {
  get(path, token, params) {
    return request('GET', `${path}?${querystring.stringify(params)}`, token);
  },
  post(path, token, data) {
    return request('POST', path, token, data);
  },
  put(path, token, data) {
    return request('PUT', path, token, data);
  },
};

export default api;

