/* Redux Imports */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Reducer Imports */
import cartReducer from 'redux/reducers/cart/cart.reducer';
import loginReducer from 'redux/reducers/login.reducer';
import authenticationReducer from 'redux/reducers/authentication.reducer';
import modalReducer from 'redux/reducers/modal.reducer';
import statusReducer from 'redux/reducers/status.reducer';
import farmerPanelReducer from 'redux/reducers/farmer/farmerPanel.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'cart', 'status'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  authentication: authenticationReducer,
  modal: modalReducer,
  status: statusReducer,
  farmerPanel: farmerPanelReducer,
});

export default persistReducer(persistConfig, rootReducer);
