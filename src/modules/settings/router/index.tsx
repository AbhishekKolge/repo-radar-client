import { lazy } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

const Profile = lazy(() =>
  import('../pages').then((module) => {
    return { default: module.Profile };
  }),
);
const Preference = lazy(() =>
  import('../pages').then((module) => {
    return { default: module.Preference };
  }),
);
const Security = lazy(() =>
  import('../pages').then((module) => {
    return { default: module.Security };
  }),
);

export const SettingsRouter = (): RouteObject[] => {
  const routes: RouteObject[] = [
    {
      index: true,
      element: <Navigate to="profile" replace />,
    },
    {
      path: 'profile',
      element: <Profile />,
    },
    {
      path: 'preference',
      element: <Preference />,
    },
    {
      path: 'security',
      element: <Security />,
    },
  ];

  return routes;
};
