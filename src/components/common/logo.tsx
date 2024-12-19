import { Link } from 'react-router-dom';
import { THEME } from '@/shared/types';
import { ASSETS, cn, ROUTES } from '@/shared/utils';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: THEME;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { className, variant = 'dark', iconOnly = false, ...rest } = props;

  const isDarkVariant = variant === THEME.DARK;
  return (
    <Link to={ROUTES.login}>
      <div className={cn('flex gap-2.5 items-center', className)} {...rest}>
        <img
          className="h-8 w-8 lg:w-10 lg:h-10"
          src={isDarkVariant ? ASSETS.icons.logos.repoRadarDark : ASSETS.icons.logos.repoRadarLight}
          alt="repo radar logo"
        />
        {!iconOnly && (
          <span
            className={cn('font-extrabold text-2xl', isDarkVariant ? 'text-primary' : 'text-white')}
          >
            RepoRadar
          </span>
        )}
      </div>
    </Link>
  );
};
