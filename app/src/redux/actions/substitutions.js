import axios from 'axios';
import Cookies from 'js-cookie';
import {
  CREATE_SUBSTITUTION_SUCCESS,
  CREATE_SUBSTITUTION_FAIL,
  ASSIGN_TEACHER_SUCCESS,
  ASSIGN_TEACHER_FAIL,
  GET_PENDING_SUBSTITUTIONS_SUCCESS,
  GET_PENDING_SUBSTITUTIONS_FAIL,
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

export const create_substitution = (data) => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    const body = JSON.stringify({ ...data });
    try {
      const res = await axios.post(
        `${API_URL}/api/substitutions/create/`,
        body,
        config
      );

      dispatch({
        type: CREATE_SUBSTITUTION_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_SUBSTITUTION_FAIL,
      });
    }
  } else {
    dispatch({
      type: CREATE_SUBSTITUTION_FAIL,
    });
  }
};

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
        type: GET_PENDING_SUBSTITUTIONS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: GET_PENDING_SUBSTITUTIONS_FAIL,
      });
    }
  } else {
    dispatch({
      type: GET_PENDING_SUBSTITUTIONS_FAIL,
    });
  }
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
      dispatch({
        type: GET_TAKEN_SUBSTITUTIONS_FAIL,
      });
    }
  } else {
    dispatch({
      type: GET_TAKEN_SUBSTITUTIONS_FAIL,
    });
  }
};

// ASSIGN_TEACHER / TAKE_SUBSTITUTION - think about naming convention
export const take_substitution = (id) => async (dispatch) => {
  if (Cookies.get('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      console.log(id);
      const response = await axios.patch(
        `${API_URL}/api/substitutions/assign_teacher/${id}/`, {},
        config
      );

      dispatch({
        type: ASSIGN_TEACHER_SUCCESS,
        payload: response.data, // is there any?
      });
    } catch (err) {
      dispatch({
        type: ASSIGN_TEACHER_FAIL,
      });

      // error handling, alerts?
    }
  } else {
    dispatch({
      type: ASSIGN_TEACHER_FAIL,
    });
  }
};

// GET SINGLE SUBSTITUTION OBJECT FOR ACCEPTSUBSTITUTION COMPONENT
export const get_substitution = (substitution_id) => async (dispatch) => {
  if(Cookies.get('access')){
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('access')}`,
        Accept: 'application/json',
      },
    };

    try {
      const response = await axios.get(
        `${API_URL}/api/substitutions/${substitution_id}/`,
        config
      );
      dispatch({
        type: GET_SUBSTITUTION_SUCCESS,
        payload: response.data,
      })
    } catch (err) {
      // prepare outdated token handling
      dispatch({
        type: GET_SUBSTITUTION_FAIL,
      })
    }
  } else {
    dispatch({
      type: GET_SUBSTITUTION_FAIL,
    })
  }
}