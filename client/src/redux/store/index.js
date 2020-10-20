import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "redux/reducers/root.reducers";
import logger from "redux-logger";

const middlewares = [];
const enhancers = [];

const chromeRedux =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  enhancers.push(chromeRedux);
}

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), ...enhancers)
);

export const persistor = persistStore(store);

export default { store, persistor };