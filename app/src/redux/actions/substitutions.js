import axios from 'axios';
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
} from '../actions/types';

const API_URL = 'https://web-korki.edu.pl';

//export const get_all_substitutions

export const get_pending_substitutions = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = {
    only_pending: true,
  };

  try {
    const response = await axios.get(
      `${API_URL}/api/substitutions/`,
      body,
      config
    );
    console.log(response);
    dispatch({
      type: GET_SUBSTITUTIONS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_SUBSTITUTIONS_FAIL,
    });
  }
};
