import { GET_COOKIES_SUCCESS, GET_COOKIES_FAIL } from '../actions/types';

const initialState = {
  isCookie: null,
};

export default function cookies(state = initialState, action) {
  switch (action.type) {
    case GET_COOKIES_SUCCESS:
      return {
        ...state,
        isCookie: action.payload,
      };
    case GET_COOKIES_FAIL:
      return {
        ...state,
        isCookie: action.payload,
      };
    default:
      return state;
  }
}
