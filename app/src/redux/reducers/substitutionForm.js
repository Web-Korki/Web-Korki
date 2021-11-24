import {
  GET_SUBJECTS_SUCCESS,
  GET_SUBJECTS_FAIL,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAIL,
} from '../actions/types';

const initialState = {
  subjects: null,
  faculties: null,
};

export default function substitutionForm(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjects: payload,
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        faculties: payload,
      };
    case GET_SUBJECTS_FAIL:
    case GET_CLASSES_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
}
