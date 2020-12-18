import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* reducers */
import reducers from 'redux/reducers/root.reducers';

const middlewares = [thunk];

/* store */
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);

const persistor = persistStore(store);

export { store, persistor };
