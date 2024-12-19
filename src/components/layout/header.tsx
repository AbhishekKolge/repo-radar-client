import { useSelector } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SidebarTrigger } from '../ui/sidebar';
import { getInitials } from '@/shared/utils';
import { RootState } from '@/store';

export const Header = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <header className="py-[14px] px-[25px] lg:py-[20px] lg:px-[40px]">
      <div className="max-w-screen-2xl m-auto w-full h-full flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <SidebarTrigger />
          {auth.isLoggedIn && (
            <Avatar className="h-8 w-8 lg:w-10 lg:h-10">
              <AvatarImage
                className="object-cover"
                src={auth.profileImageUrl!}
                alt={`@${auth.username}`}
              />
              <AvatarFallback className="uppercase text-background bg-primary lg:text-[22px]">
                {getInitials(auth.username!)}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </header>
  );
};
