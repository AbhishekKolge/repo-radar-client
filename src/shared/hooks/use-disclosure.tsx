import { useEffect, useState, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFirstRender } from './use-first-render';

export const useDisclosure = (param: string = 'open') => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstRender } = useFirstRender();

  const isOpen = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param) === 'true';
  }, [location.search, param]);

  const [initiallyOpen, setInitiallyOpen] = useState<boolean>(false);

  const setOpen = useCallback(
    (open: boolean) => {
      const searchParams = new URLSearchParams(location.search);
      if (open) {
        searchParams.set(param, 'true');
      } else {
        searchParams.delete(param);
      }
      navigate({ search: searchParams.toString() }, { replace: true });
    },
    [location.search, navigate, param],
  );

  useEffect(() => {
    if (firstRender && isOpen) {
      setInitiallyOpen(true);
    }
  }, [firstRender, isOpen]);

  return { isOpen, setOpen, initiallyOpen };
};
