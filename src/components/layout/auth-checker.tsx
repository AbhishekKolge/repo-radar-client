import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Loading } from '../common';
import { checkLoginStatus } from '@/modules/auth/service';
import { useFirstRender } from '@/shared/hooks';
import { ROUTES } from '@/shared/utils';
import { AppDispatch, RootState } from '@/store';

export const AuthChecker = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { firstRender } = useFirstRender();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  const isAuthPage = pathname.startsWith('/auth');

  useEffect(() => {
    if (firstRender) {
      dispatch(checkLoginStatus());
    }
  }, [dispatch, firstRender]);

  if (isLoggedIn === null) {
    return <Loading title="Building your experience..." />;
  }

  if (isLoggedIn === false && !isAuthPage) {
    return <Navigate to={ROUTES.login} replace />;
  }

  if (isLoggedIn && isAuthPage) {
    return <Navigate to={ROUTES.repository} replace />;
  }

  return <Outlet />;
};
