// import { lazy } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

// const Login = lazy(() =>
//   import('../pages').then((module) => {
//     return { default: module.Login };
//   }),
// );

export const RepositoryRouter = (): RouteObject[] => {
  const routes: RouteObject[] = [
    {
      index: true,
      element: <Navigate to="list" replace />,
    },
    {
      path: 'list',
      element: <h1>Repo</h1>,
    },
  ];

  return routes;
};
