import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/shared/utils';
import { ASSETS } from '@/shared/utils/assets';

export const Error404 = () => {
  return (
    <>
      <img className="h-40 md:h-60" src={ASSETS.illustrations.notFoundDark} alt="not found" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-medium text-xl capitalize">Page not found</h1>
        <span className="text-primary text-center">
          The page you are looking for does not exist
        </span>
      </div>
      <Button asChild>
        <Link to={ROUTES.login}>Back to home</Link>
      </Button>
    </>
  );
};
