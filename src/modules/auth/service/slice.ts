import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload, AuthState, UpdateUserInfoPayload } from '../types';

const initialAuthState: AuthState = {
  accessExpirationTime: null,
  token: null,
  id: null,
  username: null,
  profileImageUrl: null,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<AuthPayload>) {
      const { accessExpirationTime, id, username, profileImageUrl, token } = action.payload;
      state.accessExpirationTime = accessExpirationTime;
      state.token = token;
      state.id = id;
      state.username = username;
      state.profileImageUrl = profileImageUrl;
      state.isLoggedIn = true;
    },
    logout(state) {
      Object.assign(state, { ...initialAuthState, isLoggedIn: false });
    },
    updateUserInfo(state, action: PayloadAction<UpdateUserInfoPayload>) {
      const { username, profileImageUrl } = action.payload;
      if (username) {
        state.username = username;
      }
      if (profileImageUrl) {
        state.profileImageUrl = profileImageUrl;
      }
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export type AuthActions = typeof authSlice.actions;
