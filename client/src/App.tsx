/* React Router Dom */
import { Route, Switch } from 'react-router-dom';

/* Utils */
import { withScrollIntoView } from '@hocs';
import { RouteWithSubRoutes } from './routes/router';

import { routes } from './routes/paths';

/* App wrapper */
const App: React.FC = () => {
  return (
    <>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </>
  );
};

export default App;
