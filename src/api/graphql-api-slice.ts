import type { BaseQueryApi } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import type { DocumentNode } from 'graphql';
import { ClientError } from 'graphql-request';
import { logoutHandler } from '@/modules/auth/service';
import { CustomGraphQLError } from '@/shared/types';
import { env, errorToast, formatGraphQlErrors } from '@/shared/utils';
import { RootState } from '@/store';

const baseQuery = graphqlRequestBaseQuery({
  url: env.VITE_GRAPHQL_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  customErrors: (error) => {
    const { errors } = error.response;

    const errorObj = errors?.[0];
    if (errorObj) {
      return formatGraphQlErrors({
        code: errorObj.extensions.code,
        status: errorObj.extensions.statusCode,
        message: errorObj.message,
      } as CustomGraphQLError);
    }
    return null;
  },
});

const baseQueryWithErrorHandler = async (
  args: {
    document: string | DocumentNode;
    variables?: unknown;
  },
  api: BaseQueryApi,
  extraOptions: Partial<Pick<ClientError, 'request' | 'response'>>,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const isSession = true;
    api.dispatch(logoutHandler(isSession));
  }

  if (result?.error) {
    const { message } = result.error;
    errorToast(message);
  }

  return result;
};

export const graphqlApiSlice = createApi({
  reducerPath: 'graphql',
  baseQuery: baseQueryWithErrorHandler,
  tagTypes: ['Country'],
  endpoints: () => ({}),
});
