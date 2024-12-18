import { useEffect, useState } from 'react';
import { DESKTOP_BREAKPOINT, MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '../utils';

export const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches);
      setIsTablet(window.matchMedia(`(max-width: ${TABLET_BREAKPOINT - 1}px)`).matches);
      setIsDesktop(window.matchMedia(`(max-width: ${DESKTOP_BREAKPOINT - 1}px)`).matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};
