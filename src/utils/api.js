import fetch from 'isomorphic-fetch';

const BASE_URL = window.API_URL;

function get(path, token) {
  const options = {};
  if (token) {
    options.headers = {
      Authorization: `Token ${token}`,
    };
  }
  return fetch(`${BASE_URL}${path}`, options)
  .then((res) => res.json());
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
  .then((res) => res.json());
}

export default { get, post };

