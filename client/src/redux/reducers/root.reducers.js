/* Redux Imports */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Reducer Imports */
import cartReducer from './cart.reducer';
import loginReducer from './login.reducer';
import switchReducer from './login-signup-switch.reducer';
import modalReducer from './modal.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  switch: switchReducer,
  modal: modalReducer,
});

export default persistReducer(persistConfig, rootReducer);
