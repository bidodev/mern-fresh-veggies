import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/* React Router Dom */
import { BrowserRouter as Router } from 'react-router-dom';

/* Redux Imports */
import { Provider } from 'react-redux';
import { store } from '@store';

/* Fontawesome Import */
import './lib/icons';

/* Root APP Imports */
import App from './App';
import './scss/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
