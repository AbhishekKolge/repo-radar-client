import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout } from '@/modules/auth/layouts';
import { AuthRouter } from '@/modules/auth/router';
import { ErrorBoundary } from '@/modules/error/pages';
import { RepositoryRouter } from '@/modules/repository/router';
import { Provider } from '@/providers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="auth" replace />,
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: AuthRouter(),
      },
      {
        path: 'repository',
        children: RepositoryRouter(),
      },
    ],
  },
]);
