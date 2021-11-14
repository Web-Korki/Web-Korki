//**import all reducers here**
import auth from './auth';
import errors from './errors';
import substitutions from './substitutions';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  errors,
  substitutions,
});

export default rootReducer;
