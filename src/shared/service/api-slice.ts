import { api } from './utils.generated';

export const utilsApiSlice = api.enhanceEndpoints({
  addTagTypes: ['Country'],
  endpoints: {
    getCountries: {
      providesTags: ['Country'],
    },
  },
});

export const { useGetCountriesQuery } = utilsApiSlice;
