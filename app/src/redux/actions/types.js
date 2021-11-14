//auth
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const RESET_STATE = 'RESET_STATE';
export const ACTIVATION_SUCCESS = 'ACTIVATION_SUCCESS';
export const ACTIVATION_FAIL = 'ACTIVATION_FAIL';
export const USER_LOADED_SUCCESS = 'USER_LOADED_SUCCESS';
export const USER_LOADED_FAIL = 'USER_LOADED_FAIL';
export const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
export const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';
export const TOKEN_REFRESH_SUCCESS = 'TOKEN_REFRESH_SUCCESS';
export const TOKEN_REFRESH_FAIL = 'TOKEN_REFRESH_FAIL';
export const PASSWORD_RESET_FAIL = 'PASSWORD_RESET_FAIL';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_CONFIRM_FAIL = 'PASSWORD_RESET_CONFIRM_FAIL';
export const PASSWORD_RESET_CONFIRM_SUCCESS = 'PASSWORD_RESET_CONFRIM_SUCCESS';
export const LOGOUT = 'LOGOUT';

//errors
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAN_ERROR_MSG = 'CLEAN_ERROR_MSG';

//substitutions
export const GET_SUBSTITUTIONS = 'GET_SUBSTITUTIONS'; //list of all active substitutions in db
export const SUBMIT_SUBSTITUTION = 'SUBMIT_SUBSTITUTION'; //submit newly created substitution to db
export const TAKE_SUBSTITUTION = 'TAKE_SUBSTITUTION'; //tutor sees need for a substitution and notify db that he/she will take it
