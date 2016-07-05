import 'babel-polyfill';
const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FECTH_USER_FULFILLED": {
      return {...state, fetching: false, fetched: true, users: action.payload}
      break;
    }
  }
  return state;
}

export default reducer;
