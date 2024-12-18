/* eslint-disable */ /**
  *
  * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
  *
  * instead, edit one of the `.graphql` files in this project and run
  *
  * pnpm run graphql-codegen
  *
  * for this file to be re-created
  */

// Vite HMR (Hot Module Replacement)
if (import.meta.hot) {
  import.meta.hot.accept();
}

import * as Types from '../../generated/types.generated';

import { graphqlApiSlice } from '@/api/graphql-api-slice.ts';
export type GetCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries?: Array<{ __typename?: 'Country', id: string, name: string, phoneCode: string } | null> | null };


export const GetCountriesDocument = `
    query getCountries {
  countries {
    id
    name
    phoneCode
  }
}
    `;

const injectedRtkApi = graphqlApiSlice.injectEndpoints({
  overrideExisting: import.meta.hot.accept() === "apply",
  endpoints: (build) => ({
    getCountries: build.query<GetCountriesQuery, GetCountriesQueryVariables | void>({
      query: (variables) => ({ document: GetCountriesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetCountriesQuery, useLazyGetCountriesQuery } = injectedRtkApi;

