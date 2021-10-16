//**import all reducers here**
import auth from './auth';
import errors from './errors';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   auth,
   errors,
});

export default rootReducer;
