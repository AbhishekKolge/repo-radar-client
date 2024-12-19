import { Dispatch } from '@reduxjs/toolkit';
import { AuthPayload, LoginPayload, UpdateUserInfoPayload } from '../types';
import { authActions } from './slice';
import {
  calculateRemainingTime,
  checkTimeIsExpired,
  env,
  getAuthStorage,
  removeAuthStorage,
  saveAuthStorage,
  successToast,
  warningToast,
} from '@/shared/utils';

export const logoutHandler = (isSession: boolean = false) => {
  return (dispatch: Dispatch): void => {
    removeAuthStorage();
    dispatch(authActions.logout());
    if (!isSession) {
      successToast('Logged out');
    }
  };
};

export const checkLoginStatus = () => {
  return (dispatch: Dispatch): void => {
    const authDetails = getAuthStorage<AuthPayload>();

    if (authDetails) {
      const accessExpired = checkTimeIsExpired(authDetails.accessExpirationTime);

      if (accessExpired) {
        removeAuthStorage();
        dispatch(authActions.logout());
        warningToast('Session expired');
        return;
      }

      dispatch(authActions.login(authDetails));

      const autoLogoutTime = calculateRemainingTime(authDetails.accessExpirationTime);
      setTimeout(() => {
        removeAuthStorage();
        dispatch(authActions.logout());
        warningToast('Session expired');
      }, autoLogoutTime);
      return;
    }

    removeAuthStorage();
    dispatch(authActions.logout());
  };
};

export const loginHandler = ({ id, username, profileImageUrl, token }: LoginPayload) => {
  return (dispatch: Dispatch): void => {
    const accessExpirationTime = Date.now() + env.VITE_ACCESS_TOKEN_EXPIRATION_TIME;

    saveAuthStorage({
      accessExpirationTime,
      id,
      username,
      profileImageUrl,
      token,
    });
    dispatch(
      authActions.login({
        accessExpirationTime,
        id,
        username,
        profileImageUrl,
        token,
      }),
    );

    successToast('Logged in successfully');

    const autoLogoutTime = calculateRemainingTime(accessExpirationTime);

    setTimeout(() => {
      removeAuthStorage();
      dispatch(authActions.logout());
      warningToast('Session expired');
    }, autoLogoutTime);
  };
};

export const updateUserInfoHandler = (updatedInfo: UpdateUserInfoPayload) => {
  return (dispatch: Dispatch): void => {
    const authDetails = getAuthStorage<AuthPayload>();
    if (!authDetails) {
      return;
    }

    (Object.keys(updatedInfo) as Array<keyof AuthPayload>).forEach((key) => {
      if (key in authDetails) {
        (authDetails[key] as AuthPayload[typeof key]) = updatedInfo[key] as AuthPayload[typeof key];
      }
    });

    saveAuthStorage(authDetails);

    dispatch(authActions.updateUserInfo(authDetails));
  };
};
