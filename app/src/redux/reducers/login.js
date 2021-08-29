import { TRY_LOGIN } from '../actions/types';

const initialState = {
	isLogged: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case TRY_LOGIN:
			return {
				...state,
				isLogged: action.payload,
			};
		default:
			return state;
	}
}
