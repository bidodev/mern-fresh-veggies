import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { devToolsEnhancer } from 'redux-devtools-extension';

/* reducers */
import reducers from 'redux/reducers/root.reducers';

/* store */
export const store = createStore(reducers, devToolsEnhancer());

export const persistor = persistStore(store);

export default { store, persistor };
