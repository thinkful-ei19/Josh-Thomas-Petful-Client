import {
    ADOPT_CAT_ERROR,
    ADOPT_CAT_REQUEST,
    ADOPT_CAT_SUCCESS,
    FETCH_CAT_ERROR,
    FETCH_CAT_REQUEST,
    FETCH_CAT_SUCCESS
  } from '../actions/cat';
  
  const initialState = {
    data: null,
    error: null,
    loading: false
  };
  
  export default (state = initialState, action) => {
    if (action.type === ADOPT_CAT_REQUEST || action.type === FETCH_CAT_REQUEST) {
      return Object.assign({}, state, {
        data: null,
        error: null,
        loading: true
      });
    }
  
    if (action.type === ADOPT_CAT_ERROR || action.type === FETCH_CAT_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }
  
    if (action.type === FETCH_CAT_SUCCESS) {
      return Object.assign({}, state, {
        data: action.data,
        loading: false
      });
    }
  
    if (action.type === ADOPT_CAT_SUCCESS) {
      return Object.assign({}, state, {
        data: null,
        loading: false
      });
    }
  
    return state;
  };
  
  