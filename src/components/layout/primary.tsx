import { Outlet } from 'react-router-dom';
import { AppSidebar } from './app-sidebar';
import { Header } from './header';
import { SidebarProvider } from '@/components/ui/sidebar';

export const PrimaryLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full flex flex-col">
        <Header />
        <section className="flex-1 py-[14px] px-[25px] lg:px-[40px] lg:py-[20px]">
          <div className="max-w-screen-2xl m-auto w-full h-full">
            <Outlet />
          </div>
        </section>
      </main>
    </SidebarProvider>
  );
};
