import {
  GET_SUBSTITUTIONS,
  SUBMIT_SUBSTITUTION,
  TAKE_SUBSTITUTION,
} from '../actions/types';

const initialState = {
  substitutions: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SUBSTITUTIONS:
      return {
        ...state,
      };
    case SUBMIT_SUBSTITUTION:
      return {
        ...state,
      };
    case TAKE_SUBSTITUTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
