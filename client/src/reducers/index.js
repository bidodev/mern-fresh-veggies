// ===== INDEX for REDUCER ===

import { combineReducers } from 'redux';
import loggedReducer from './isLogged';

const allReducers = combineReducers({
  //  <name>: <reducer name>,
  // <name>: <reducer name>,
  isLogged: loggedReducer,
});

export default allReducers;
