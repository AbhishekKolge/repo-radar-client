import { lazy } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

const Login = lazy(() =>
  import('../pages').then((module) => {
    return { default: module.Login };
  }),
);

const GithubVerify = lazy(() =>
  import('../pages').then((module) => {
    return { default: module.GithubVerify };
  }),
);

export const AuthRouter = (): RouteObject[] => {
  const routes: RouteObject[] = [
    {
      index: true,
      element: <Navigate to="login" replace />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'github',
      element: <GithubVerify />,
    },
  ];

  return routes;
};
