/* Redux Imports */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Reducer Imports */
import loginReducer from './login.reducer';
import statusReducer from './status.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const rootReducer = combineReducers({
  login: loginReducer,
  status: statusReducer,
});

export default persistReducer(persistConfig, rootReducer);
