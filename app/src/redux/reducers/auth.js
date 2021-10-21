import Cookies from 'js-cookie';
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	ACTIVATION_SUCCESS,
	ACTIVATION_FAIL,
	USER_LOADED_SUCCESS,
	USER_LOADED_FAIL,
	AUTHENTICATED_SUCCESS,
	AUTHENTICATED_FAIL,
	TOKEN_REFRESH_SUCCESS,
	TOKEN_REFRESH_FAIL,
	PASSWORD_RESET_SUCCESS,
	PASSWORD_RESET_FAIL,
	PASSWORD_RESET_CONFIRM_SUCCESS,
	PASSWORD_RESET_CONFIRM_FAIL,
	LOGOUT,
} from '../actions/types';

const initialState = {
	access: Cookies.get('access'),
	refresh: Cookies.get('refresh'),
	isAuthenticated: null,
	isSuperuser: null,
	loginSuccess: null,
	user: null,
	isLoading: false,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case AUTHENTICATED_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
			};
		case TOKEN_REFRESH_SUCCESS:
			Cookies.remove('access');
			Cookies.remove('refresh');
			Cookies.set('access', payload.access);
			Cookies.set('refresh', payload.refresh);
			return {
				...state,
				access: payload.access,
				refresh: payload.refresh,
			};
		case LOGIN_SUCCESS:
			Cookies.set('access', payload.access);
			Cookies.set('refresh', payload.refresh);
			return {
				...state,
				isAuthenticated: true,
				loginSuccess: true,
				access: payload.access,
				refresh: payload.refresh,
			};
		case USER_LOADED_SUCCESS:
			return {
				...state,
				user: payload,
				isSuperuser: payload.is_superuser,
				isAuthenticated: true,
			};
		case AUTHENTICATED_FAIL:
			return {
				...state,
				isAuthenticated: false,
			};
		case TOKEN_REFRESH_FAIL:
			Cookies.remove('access');
			Cookies.remove('refresh');
			return {
				...state,
				access: null,
				refresh: null,
				isAuthenticated: false,
			};
		case USER_LOADED_FAIL:
			return {
				...state,
				user: null,
			};
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT:
			Cookies.remove('access');
			Cookies.remove('refresh');
			return {
				...state,
				access: null,
				refresh: null,
				isAuthenticated: false,
				isSuperuser: null,
				loginSuccess: false,
				user: null,
			};
		case PASSWORD_RESET_SUCCESS:
		case PASSWORD_RESET_FAIL:
		case PASSWORD_RESET_CONFIRM_SUCCESS:
		case PASSWORD_RESET_CONFIRM_FAIL:
		case ACTIVATION_SUCCESS:
		case ACTIVATION_FAIL:
		case REGISTER_SUCCESS:
			return {
				...state,
			};
		default:
			return state;
	}
}
