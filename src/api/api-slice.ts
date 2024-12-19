import type { BaseQueryApi, BaseQueryExtraOptions, FetchArgs } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logoutHandler } from '@/modules/auth/service';
import { env, errorToast } from '@/shared/utils';
import { RootState } from '@/store';

const baseQuery = fetchBaseQuery({
  baseUrl: env.VITE_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithErrorHandler = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<typeof baseQuery>,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const isSession = true;
    api.dispatch(logoutHandler(isSession));
  }

  if (result?.error) {
    const { message } = result.error.data as { message: string };
    errorToast(message || 'Something went wrong!, please try again');
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithErrorHandler,
  tagTypes: [],
  endpoints: () => ({}),
});
