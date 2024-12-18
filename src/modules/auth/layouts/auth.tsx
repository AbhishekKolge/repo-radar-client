import { Outlet } from 'react-router-dom';
import { Logo } from '@/components/common';
import { THEME } from '@/shared/types';
import { ASSETS } from '@/shared/utils';

export const AuthLayout = () => {
  return (
    <main>
      <section className="min-h-screen w-full grid lg:grid-cols-2">
        <div className="hidden px-[25px] lg:px-[40px] py-[25px] lg:py-[30px] bg-primary lg:grid grid-rows-[auto_1fr]">
          <Logo variant={THEME.LIGHT} />
          <div className="flex items-center justify-center">
            <div className="h-96">
              <img className="w-full h-full" src={ASSETS.illustrations.progressLight} alt="cover" />
            </div>
          </div>
        </div>
        <div className="px-[25px] lg:px-[40px] py-[25px] lg:py-[30px]">
          <Outlet />
        </div>
      </section>
    </main>
  );
};
