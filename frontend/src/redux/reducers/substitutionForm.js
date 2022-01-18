import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
  GET_LEVEL_SUCCESS,
  GET_LEVEL_FAIL,
} from '../actions/types';

const initialState = {
  subjects: null,
  levels: null,
};

export default function substitutionForm(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjects: payload,
      };
    case GET_LEVEL_SUCCESS:
      return {
        ...state,
        levels: payload,
      };
    case GET_SUBJECTS_FAIL:
    case GET_LEVEL_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
}
