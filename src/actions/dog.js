import { API_BASE_URL } from '../config';


export const fetchDog = () => dispatch => {
    console.log('Attempting to fetch a dog');
    dispatch(fetchDogRequest());
  
    fetch(`${API_BASE_URL}/dogs`)
      .then(res => {
        if (!res.ok) {
          console.log('error fetching the dog!');
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(dog => {
        console.log('Got a dog! Dispatching fetchDogSuccess');
        dispatch(fetchDogSuccess(dog));
      })
      .then(error => fetchDogError(error));
  };
  
  export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
  export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
  });
  
  export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
  export const fetchDogError = error => ({
    error,
    type: FETCH_DOG_ERROR
  });
  
  export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
  export const fetchDogSuccess = data => ({
    data,
    type: FETCH_DOG_SUCCESS
  });
  
  /** --------------------------- DELETING A DOG ----------------------------- **/
  
  export const adoptDog = () => dispatch => {
    console.log('adopt dog');
    dispatch(adoptDogRequest());
  
    fetch(`${API_BASE_URL}/dogs`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) {
          console.log('error adopting dog');
          return Promise.reject(res.statusText);
        }
        return res.statusText;
      })
      .then(dog => {
        console.log('dispatching adoptDogSuccess');
        dispatch(adoptDogSuccess());
      })
      .then(() => dispatch(fetchDog()))
      .then(error => adoptDogError(error));
  };
  
  export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
  export const adoptDogRequest = () => ({
    type: ADOPT_DOG_REQUEST
  });
  
  export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
  export const adoptDogError = () => ({
    type: ADOPT_DOG_ERROR
  });
  
  export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
  export const adoptDogSuccess = () => ({
    type: ADOPT_DOG_SUCCESS
  });