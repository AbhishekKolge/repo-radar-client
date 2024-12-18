import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { loginHandler } from '../service';
import { LoginPayload } from '../types';
import { GithubVerifyParams } from '../types/auth';
import { Loading } from '@/components/common';
import { useFirstRender } from '@/shared/hooks';
import { errorToast, ROUTES, stringToBoolean } from '@/shared/utils';
import { AppDispatch } from '@/store';

export const GithubVerify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const { firstRender } = useFirstRender();

  const params = useMemo<GithubVerifyParams>(() => {
    return {
      success: stringToBoolean(searchParams.get('success')),
      id: searchParams.get('id'),
      username: searchParams.get('username'),
      profileImageUrl: searchParams.get('profileImageUrl'),
      token: searchParams.get('token'),
    };
  }, [searchParams]);

  const googleSuccessHandler = useCallback(() => {
    dispatch(
      loginHandler({
        id: params.id,
        username: params.username,
        profileImageUrl: params.profileImageUrl,
        token: params.token,
      } as LoginPayload),
    );
    navigate(ROUTES.repository, { replace: true });
  }, [dispatch, navigate, params]);

  const googleFailureHandler = useCallback(() => {
    errorToast('GitHub authentication failed. Please try again.');
    navigate(ROUTES.login, { replace: true });
  }, [navigate]);

  useEffect(() => {
    if (!firstRender) return;
    if (params.success) {
      googleSuccessHandler();
    } else {
      googleFailureHandler();
    }
  }, [firstRender, googleFailureHandler, googleSuccessHandler, params.success]);

  return <Loading title="Verifying your GitHub account..." />;
};
