/* Redux Imports */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Reducer Imports */
import loginReducer from './login.reducer';
import statusReducer from './status.reducer';
import signInReducer from './signIn.reducer';
import switchReducer from './login-signup-switch.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const rootReducer = combineReducers({
  login: loginReducer,
  status: statusReducer,
  clientSignIn: signInReducer,
  switch: switchReducer,
});

export default persistReducer(persistConfig, rootReducer);
