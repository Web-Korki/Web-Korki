//**import all reducers here**
import auth from './auth';
import errors from './errors';
import substitutionForm from './substitutionForm';
import cookies from './cookies';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  errors,
  substitutionForm,
  cookies,
});

export default rootReducer;
