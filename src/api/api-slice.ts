import type { BaseQueryApi, BaseQueryExtraOptions, FetchArgs } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '@/shared/utils';

const baseQuery = fetchBaseQuery({
  baseUrl: env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<typeof baseQuery>,
) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: [],
  endpoints: () => ({}),
});
