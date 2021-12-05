import axios from 'axios';
import Cookies from 'js-cookie';
import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
  GET_LEVEL_SUCCESS,
  GET_LEVEL_FAIL,
} from '../actions/types';

const API_URL = 'https://web-korki.edu.pl';

export const get_levels = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const res = await axios.get(`${API_URL}/api/levels/`, config);
      dispatch({
        type: GET_LEVEL_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_LEVEL_FAIL,
      });
    }
  }
};

export const get_subjects = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const res = await axios.get(`${API_URL}/api/subjects/`, config);
      dispatch({
        type: GET_SUBJECTS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_SUBJECTS_FAIL,
      });
    }
  }
};
