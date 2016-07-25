import fetch from 'isomorphic-fetch';

const BASE_URL = window.API_URL;

class HttpError extends Error {
  constructor(status) {
    super();
    this.status = status;
  }
}

function get(path, token) {
  const options = {};
  if (token) {
    options.headers = {
      Authorization: `Token ${token}`,
    };
  }
  return fetch(`${BASE_URL}${path}`, options)
  .then((res) => {
    if (res.status >= 400) {
      throw new HttpError(res.status);
    }
    res.json();
  });
}

function post(path, data, token) {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };
  if (token) {
    options.headers = {
      Authorization: `Token ${token}`,
    };
  }
  return fetch(`${BASE_URL}${path}`, options)
  .then((res) => {
    if (res.status >= 400) {
      throw new HttpError(res.status);
    }
    return res.json();
  });
}

export default { get, post };

