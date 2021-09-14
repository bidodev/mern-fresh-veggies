import { lazy } from 'react';

/* Page Imports */
const PreAdminPanel = lazy(() => import('../pages/preadminpanel/wrapper'));
const Landing = lazy(() => import('../features/landing/pages/Overview/Overview'));
//const Shop = React.lazy(() => import('./pages/shop/shop.page'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    path: '/shop',
    exact: true,
    component: () => <div>Shop</div>,
    routes: [
      {
        path: '/shop/client',
        exact: true,
        component: <h2>Hello Shop/Client</h2>,
      },
      {
        path: '/shop/something',
        exact: true,
        component: <h2>Hello Shop/something</h2>,
      },
    ],
  },
];
