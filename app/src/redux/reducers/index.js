//**import all reducers here**
import auth from './auth';
import errors from './errors';
import substitutionForm from './substitutionForm';
import analysis from './analysis';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  errors,
  substitutionForm,
  analysis,
});

export default rootReducer;
