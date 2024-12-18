import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Error, Error404 } from '../components';

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;

  const isNotFoundError = isRouteErrorResponse(error) && error.status === 404;

  return (
    <main>
      <section className="min-h-screen p-[20px] lg:p-[25px] flex items-center justify-center flex-col gap-6">
        {isNotFoundError ? <Error404 /> : <Error message={error.message} />}
      </section>
    </main>
  );
};
