import axios from 'axios';
import Cookies from 'js-cookie';
import {
  CREATE_SUBSTITUTION_SUCCESS,
  CREATE_SUBSTITUTION_FAIL,
  ASSIGN_TEACHER_SUCCESS,
  ASSIGN_TEACHER_FAIL,
  GET_SUBSTITUTIONS_SUCCESS,
  GET_SUBSTITUTIONS_FAIL,
  GET_SUBSTITUTION_SUCCESS,
  GET_SUBSTITUTION_FAIL,
  MODIFY_SUBSTITUTION_SUCCESS,
  MODIFY_SUBSTITUTION_FAIL,
  DELETE_SUBSTITUTION_SUCCESS,
  DELETE_SUBSTITUTION_FAIL,
  GET_TAKEN_SUBSTITUTIONS_SUCCESS,
  GET_TAKEN_SUBSTITUTIONS_FAIL,
} from '../actions/types';
import { refresh_token } from './auth';

const API_URL = 'https://web-korki.edu.pl';

export const get_pending_substitutions = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };
    try {
      const response = await axios.get(
        `${API_URL}/api/substitutions/?new_teacher_found=false`,
        config
      );
      dispatch({
        type: GET_SUBSTITUTIONS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      get_pending_substitution_token_refresh();
    }
  } else {
    dispatch({
      type: GET_SUBSTITUTIONS_FAIL,
    });
  }
};

const get_pending_substitution_token_refresh = () => {
  refresh_token();
  get_pending_substitutions();
};

export const get_taken_substitutions = () => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const response = await axios.get(
        `${API_URL}/api/substitutions/?new_teacher_found=true`,
        config
      );
      dispatch({
        type: GET_TAKEN_SUBSTITUTIONS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      get_taken_substitution_token_refresh();
    }
  } else {
    dispatch({
      type: GET_TAKEN_SUBSTITUTIONS_FAIL,
    });
  }
};

const get_taken_substitution_token_refresh = () => {
  refresh_token();
  get_taken_substitutions();
};


// ASSIGN_TEACHER / TAKE_SUBSTITUTION - think about naming convention
export const take_substitution = (form_data, id) => async (dispatch) => {
  if(Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };
    const body = {
      // wait until api docs will be updated
    }

    try {
      const response = await axios.patch(`${API_URL}/api/substitutions/assign_teacher/${id}`, config, body);

      dispatch({
        type: ASSIGN_TEACHER_SUCCESS,
        payload: response.data // is there any?
      })
    } catch (err) {
      dispatch({
        type: ASSIGN_TEACHER_FAIL
      })

      // error handling, alerts?
    }
  } else {
    dispatch({
      type: ASSIGN_TEACHER_FAIL
    })
  }
}