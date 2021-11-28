//auth:
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
export const CHANGE_DEFAULT_PASSWORD_SUCCESS =
  'CHANGE_DEFAULT_PASSWORD_SUCCESS';
export const CHANGE_DEFAULT_PASSWORD_FAIL = 'CHANGE_DEFAULT_PASSWORD_FAIL'; 
export const LOGOUT = 'LOGOUT';

//errors:
export const GET_ERRORS = 'GET_ERRORS';
<<<<<<< HEAD
export const CLEAN_ERROR_MSG = 'CLEAN_ERROR_MSG';

//##################################################################
//substitutions:
export const CREATE_SUBSTITUTION_SUCCESS = 'CREATE_SUBSTITUTION_SUCCESS'; //submit newly created substitution to db API: /api/substitutions/create/
export const CREATE_SUBSTITUTION_FAIL = 'CREATE_SUBSTITUTION_FAIL';

export const ASSIGN_TEACHER_SUCCESS = 'ASSIGN_TEACHER_SUCCESS'; //tutor sees need for a substitution and notify db that he/she will take it API: /api/substitutions/assign_teacher/{substitution_id}
export const ASSIGN_TEACHER_FAIL = 'ASSIGN_TEACHER_FAIL';
// COMMENT TO ABOVE:
/*
Assigns currently logged-in user as new_teacher.
Sets new_teacher_found field in substitution to True.
If there is already teacher assigned returns failure.
*/

export const GET_SUBSTITUTIONS_SUCCESS = 'GET_SUBSTITUTIONS_SUCCESS'; //list of all substitutions (or only pending ones) in db api: API: /api/substitutions/
export const GET_SUBSTITUTIONS_FAIL = 'GET_SUBSTITUTIONS_FAIL';

export const GET_SUBSTITUTION_SUCCESS = 'GET_SUBSTITUTION_SUCCESS'; //returns object for given substitution_id API: /api/substitutions/{substitution_id}
export const GET_SUBSTITUTION_FAIL = 'GET_SUBSTITUTION_FAIL';

export const MODIFY_SUBSTITUTION_SUCCESS = 'MODIFY_SUBSTITUTION_SUCCESS';
//already craeted substitution can be modified via /api/substitutions/{substitution_id} with all field being optional
export const MODIFY_SUBSTITUTION_FAIL = 'MODIFY_SUBSTITUTION_FAIL';

export const DELETE_SUBSTITUTION_SUCCESS = 'DELETE_SUBSTITUTION_SUCCESS';
//delete in case of mistake, cancellation or whatever /api/substitutions/{substitution_id}
export const DELETE_SUBSTITUTION_FAIL = 'DELETE_SUBSTITUTION_FAIL';
=======

//createSubstitutions
export const GET_SUBJECTS_SUCCESS = 'GET_SUBJECTS_SUCCESS';
export const GET_SUBJECTS_FAIL = 'GET_SUBJECTS_FAIL';
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS';
export const GET_CLASSES_FAIL = 'GET_CLASSES_FAIL';
>>>>>>> master
