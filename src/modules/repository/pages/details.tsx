import { useParams } from 'react-router-dom';

export const RepositoryDetails = () => {
  const params = useParams();
  return <h1>Repository Detail {params.id}</h1>;
};
