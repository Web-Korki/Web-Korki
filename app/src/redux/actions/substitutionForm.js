import axios from 'axios';
import Cookies from 'js-cookie';
import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAIL,
} from '../actions/types';

const API_URL = 'https://web-korki.edu.pl';

export const get_classes = () => async (dispatch) => {
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
        type: GET_CLASSES_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_CLASSES_FAIL,
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
