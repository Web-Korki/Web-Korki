//**import all reducers here**
import auth from './auth';
import errors from './errors';
import substitutionForm from './substitutionForm';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  errors,
  substitutionForm,
});

export default rootReducer;
