import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ASSETS, ROUTES } from '@/shared/utils';

interface ErrorProps {
  message?: string;
}

export const Error: React.FC<ErrorProps> = (props) => {
  const { message } = props;

  const reloadPageHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <img className="h-40 md:h-60" src={ASSETS.illustrations.errorDark} alt="error" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-destructive font-medium text-md md:text-lg max-w-[800px] text-center capitalize">
          {message || 'something went wrong'}
        </h1>
        <p className="text-sm md:text-base w-[400px] text-center">
          Brace yourself till we get the error fixed. You may also refresh the page or try again
          later
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button variant="secondary" onClick={reloadPageHandler}>
          Reload page
        </Button>
        <Button asChild>
          <Link to={ROUTES.login}>Back to home</Link>
        </Button>
      </div>
    </>
  );
};
