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
  RESET_STATE,
} from '../actions/types';

const initialState = {
  pending_substitutions: null,
  substitutions: null,
  substitution: null,
  all_substitutions: null,
  taken_substitutions: null,
  create_substitution_success: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RESET_STATE:
      return {
        ...state,
        create_substitution_success: null,
      };
    case CREATE_SUBSTITUTION_SUCCESS:
      return {
        ...state,
        create_substitution_success: true,
      };
    case CREATE_SUBSTITUTION_FAIL:
      return {
        ...state,
        create_substitution_success: false,
      };
    case ASSIGN_TEACHER_SUCCESS:
      return {
        ...state,
      };
    case ASSIGN_TEACHER_FAIL:
      return {
        ...state,
      };
    case GET_PENDING_SUBSTITUTIONS_SUCCESS:
      return {
        ...state,
        pending_substitutions: payload,
      };
    case GET_PENDING_SUBSTITUTIONS_FAIL:
      return {
        ...state,
      };
    case GET_SUBSTITUTION_SUCCESS:
      return {
        ...state,
        substitution: payload,
      };
    case GET_SUBSTITUTION_FAIL:
      return {
        ...state,
      };
    case GET_TAKEN_SUBSTITUTIONS_SUCCESS:
      return {
        ...state,
        taken_substitutions: payload,
      };
    case GET_TAKEN_SUBSTITUTIONS_FAIL:
      return {
        ...state,
      };
    case MODIFY_SUBSTITUTION_SUCCESS:
      return {
        ...state,
      };
    case MODIFY_SUBSTITUTION_FAIL:
      return {
        ...state,
      };
    case DELETE_SUBSTITUTION_SUCCESS:
      return {
        ...state,
      };
    case DELETE_SUBSTITUTION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
