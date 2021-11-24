import {
  GET_VOLUNTEER_ANALYSIS_SUCCESS,
  GET_VOLUNTEER_ANALYSIS_FAIL,
  GET_LECTURE_ANALYSIS_SUCCESS,
  GET_LECTURE_ANALYSIS_FAIL,
} from '../actions/types';

export default function analysis(state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_VOLUNTEER_ANALYSIS_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case GET_VOLUNTEER_ANALYSIS_FAIL:
      return {
        ...state,
      };
    case GET_LECTURE_ANALYSIS_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case GET_LECTURE_ANALYSIS_FAIL:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
