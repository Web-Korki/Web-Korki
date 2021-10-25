import { GET_ERRORS, CLEAN_ERROR_MSG } from '../actions/types';

const initialState = {
	msg: null,
	email: null,
	status: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ERRORS:
			return {
				msg: action.payload.msg,
				email: action.payload.email,
				status: action.payload.status,
			};
		case CLEAN_ERROR_MSG:
			return {
				...state,
				msg: null,
				status: null,
			};
		default:
			return state;
	}
}
