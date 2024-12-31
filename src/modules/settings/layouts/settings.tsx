import { Outlet } from 'react-router-dom';
import { Tabs } from '../components';

export const SettingsLayout = () => {
  return (
    <div>
      <Tabs />
      <div className="py-[14px] lg:py-[20px]">
        <Outlet />
      </div>
    </div>
  );
};
