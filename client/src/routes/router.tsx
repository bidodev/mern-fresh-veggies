import { Route } from 'react-router-dom';
import { Suspense } from 'react';

export const RouteWithSubRoutes = ({
  path,
  exact,
  component: Component,
  routes,
}: {
  path: string;
  exact: boolean;
  component: any;
  routes?: any;
}) => {
  // const { path, component: Component, routes } = route;

  return (
    <Suspense
      fallback={
        <>
          <h2>Helllo World</h2>
        </>
      }
    >
      <Route
        path={path}
        exact={exact}
        render={(props: any) => (
          // pass the sub-routes down to keep nesting
          <Component {...props} routes={routes} />
        )}
      />
    </Suspense>
  );
};
