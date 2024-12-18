import { useGetCountriesQuery } from '@/shared/graphql/utils.generated';

export const RepositoryList = () => {
  const { data, error } = useGetCountriesQuery();
  console.log({ data: data, error });

  return <h1>Repository List</h1>;
};
