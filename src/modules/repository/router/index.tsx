import { lazy } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

const RepositoryList = lazy(() =>
  import('../pages').then((module) => {
    return { default: module.RepositoryList };
  }),
);
const RepositoryDetails = lazy(() =>
  import('../pages').then((module) => {
    return { default: module.RepositoryDetails };
  }),
);

export const RepositoryRouter = (): RouteObject[] => {
  const routes: RouteObject[] = [
    {
      index: true,
      element: <Navigate to="list" replace />,
    },
    {
      path: 'list',
      element: <RepositoryList />,
    },
    {
      path: ':id',
      element: <RepositoryDetails />,
    },
  ];

  return routes;
};
