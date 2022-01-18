//**import all reducers here**
import auth from './auth';
import errors from './errors';
import substitutionForm from './substitutionForm';
import substitutions from './substitutions';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  errors,
  substitutionForm,
  substitutions,
});

export default rootReducer;
