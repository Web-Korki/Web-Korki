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

const initialState = {
  pending_substitutions: null,
  all_substitutions: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_SUBSTITUTION_SUCCESS:
      return {
        ...state,
      };
    case CREATE_SUBSTITUTION_FAIL:
      return {
        ...state,
      };
    case ASSIGN_TEACHER_SUCCESS:
      return {
        ...state,
      };
    case ASSIGN_TEACHER_FAIL:
      return {
        ...state,
      };
    case GET_SUBSTITUTIONS_SUCCESS:
      return {
        ...state,
        pending_substitutions: payload,
      };
    case GET_SUBSTITUTIONS_FAIL:
      return {
        ...state,
        
      };
    case GET_SUBSTITUTION_SUCCESS:
      return {
        ...state,
      };
    case GET_SUBSTITUTION_FAIL:
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
