import Cookies from 'js-cookie';
import { GET_COOKIES_SUCCESS, GET_COOKIES_FAIL } from '../actions/types';

export const check_cookies = () => async (dispatch) => {
  if (Cookies.get('w-k_consent')) {
    dispatch({
      type: GET_COOKIES_SUCCESS,
      payload: true,
    });
  } else {
    dispatch({
      type: GET_COOKIES_FAIL,
      payload: false,
    });
  }
};
