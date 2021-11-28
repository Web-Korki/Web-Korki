//**import all reducers here**
import auth from './auth';
import errors from './errors';
<<<<<<< HEAD
import substitutions from './substitutions';
=======
import substitutionForm from './substitutionForm';
>>>>>>> master

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  errors,
<<<<<<< HEAD
  substitutions,
=======
  substitutionForm,
>>>>>>> master
});

export default rootReducer;
