import { NavLink } from 'react-router-dom';
import { cn, SETTINGS_TAB_OPTIONS } from '@/shared/utils';

export const Tabs = () => {
  return (
    <div className="border-b border-secondary flex gap-4 md:gap-6 sm:justify-center md:justify-start overflow-x-scroll">
      {SETTINGS_TAB_OPTIONS.map((setting) => {
        return (
          <NavLink
            className={({ isActive }) => {
              return cn(
                'min-w-20 md:min-w-32 block pb-[7px] md:pb-[11px] px-[6px] md:px-[15px] relative leading-5 font-medium text-center text-sm md:text-base',
                isActive &&
                  "before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] md:before:h-[3px] before:bg-sidebar-foreground before:rounded-t-[10px]",
              );
            }}
            key={setting.title}
            to={setting.url}
          >
            {setting.title}
          </NavLink>
        );
      })}
    </div>
  );
};
