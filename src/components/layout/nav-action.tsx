import { BellIcon, ChevronsUpDown, Fingerprint, LogOut, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import { logoutHandler } from '@/modules/auth/service';
import { getInitials, ROUTES } from '@/shared/utils';
import { AppDispatch, RootState } from '@/store';

interface NavActionProps {
  isMobile?: boolean;
  iconOnly?: boolean;
}

export const NavAction = (props: NavActionProps) => {
  const { isMobile = false, iconOnly = false } = props;
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const logoutAccountHandler = () => {
    dispatch(logoutHandler());
  };

  if (!auth) {
    return null;
  }
  return (
    <SidebarMenuButton asChild>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-between items-center w-full gap-4 p-2">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={auth.profileImageUrl!} alt={auth.username!} />
            <AvatarFallback className="rounded-lg">{getInitials(auth.username!)}</AvatarFallback>
          </Avatar>
          {!iconOnly && (
            <>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{auth.username}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side={isMobile ? 'bottom' : 'right'}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={auth.profileImageUrl!} alt={auth.username!} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{auth.username}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to={ROUTES.profileSettings}>
                <User />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={ROUTES.preferenceSettings}>
                <BellIcon />
                Preference
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={ROUTES.securitySettings}>
                <Fingerprint />
                Security
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logoutAccountHandler}>
            <LogOut className="text-destructive" />
            <span className="text-destructive">Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuButton>
  );
};
