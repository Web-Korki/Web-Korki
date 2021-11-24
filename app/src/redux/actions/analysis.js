import axios from 'axios';
import Cookies from 'js-cookie';
import {
  GET_VOLUNTEER_ANALYSIS_SUCCESS,
  GET_VOLUNTEER_ANALYSIS_FAIL,
  GET_LECTURE_ANALYSIS_SUCCESS,
  GET_LECTURE_ANALYSIS_FAIL,
} from './types';

const API_URL = 'https://web-korki.edu.pl';

export const get_lecture_analysis = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const response = await axios.get(`${API_URL}/api/houses/`, config);
      dispatch({
        type: GET_LECTURE_ANALYSIS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: GET_LECTURE_ANALYSIS_FAIL,
        error: err,
      });
    }
  }
};

export const get_volunteer_analysis = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const response = await axios.get(`${API_URL}/auth/users/`, config);
      console.log(response);
      dispatch({
        type: GET_VOLUNTEER_ANALYSIS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: GET_VOLUNTEER_ANALYSIS_FAIL,
        error: err,
      });
    }
  }
};
