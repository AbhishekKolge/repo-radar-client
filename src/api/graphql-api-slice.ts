import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const graphqlApiSlice = createApi({
  reducerPath: 'graphql',
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost:8000/graphql',
  }),
  endpoints: () => ({}),
});
