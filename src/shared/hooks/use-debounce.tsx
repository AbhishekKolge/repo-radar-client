import _debounce from 'lodash/debounce';
import { useEffect, useMemo, useRef } from 'react';
import { DEBOUNCE_TIME } from '../utils';

type Callback = () => void;

export const useDebounce = (callback: Callback) => {
  const ref = useRef<Callback>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return _debounce(func, DEBOUNCE_TIME);
  }, []);

  return debouncedCallback;
};
