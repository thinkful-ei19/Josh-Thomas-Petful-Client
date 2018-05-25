import { API_BASE_URL } from '../config';

/// --------------------------- GETTING A CAT ----------------------------- ///

export const fetchCat = () => dispatch => {
  console.log('Attempting to fetch a cat');
  dispatch(fetchCatRequest());

  fetch(`${API_BASE_URL}/cats`)
    .then(res => {
      if (!res.ok) {
        console.log('error fetching the cat!');
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(cat => {
      console.log('Got a cat! Dispatching fetchCatSuccess');
      dispatch(fetchCatSuccess(cat));
    })
    .catch(error => fetchCatError(error));
};

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  error,
  type: FETCH_CAT_ERROR
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = data => ({
  data,
  type: FETCH_CAT_SUCCESS
});

/// --------------------------- DELETING A CAT ----------------------------- ///

export const adoptCat = () => dispatch => {
  console.log('adopt cat');
  dispatch(adoptCatRequest());

  fetch(`${API_BASE_URL}/cats`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        console.log('error adopting cat');
        return Promise.reject(res.statusText);
      }
      return res.statusText;
    })
    .then(cat => {
      console.log('dispatching adoptCatSuccess');
      dispatch(adoptCatSuccess());
    })
    .then(() => dispatch(fetchCat()))
    .catch(error => adoptCatError(error));
};

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = () => ({
  type: ADOPT_CAT_ERROR
});

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
});