import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common';
import { NavAction } from './nav-action';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { SIDEBAR_OPTIONS } from '@/shared/utils';

export const AppSidebar = () => {
  const { state, isMobile } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo iconOnly={!isMobile && isCollapsed} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            {SIDEBAR_OPTIONS.map((option) => {
              const isActive = location.pathname.startsWith(option.url);
              return (
                <SidebarMenuItem key={option.id}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link to={option.url}>
                      <option.icon />
                      <span>{option.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <NavAction isMobile={isMobile} iconOnly={!isMobile && isCollapsed} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
