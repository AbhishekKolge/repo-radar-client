import { AUTH_STORAGE_NAME } from './defaults';

export const saveStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = <T>(key: string): T | null => {
  const storedData = localStorage.getItem(key);
  return storedData ? (JSON.parse(storedData) as T) : null;
};

export const removeStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const saveAuthStorage = <T>(auth: T): void => {
  saveStorage(AUTH_STORAGE_NAME, auth);
};

export const getAuthStorage = <T>(): T | null => {
  return getStorage<T>(AUTH_STORAGE_NAME);
};

export const removeAuthStorage = (): void => {
  removeStorage(AUTH_STORAGE_NAME);
};
