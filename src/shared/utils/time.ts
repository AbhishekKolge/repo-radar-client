import dayjs from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { env } from './environment';

dayjs.extend(utc);
dayjs.extend(tz);

export const checkTimeIsExpired = (timeArg: string | number): boolean => {
  const currentTime = Date.now();
  const time = new Date(timeArg).getTime() - env.VITE_TIME_BUFFER;
  return time < currentTime;
};

export const calculateRemainingTime = (timeArg: string | number): number => {
  const currentTime = Date.now();
  const time = new Date(timeArg).getTime() - env.VITE_TIME_BUFFER;
  const remainingTime = time - currentTime;
  return remainingTime;
};

export const formatUtcTime = (time: string | number | Date): string => {
  return dayjs(time).utc().format('D MMMM YYYY, h:mm A');
};

export const formatUtcDate = (time: string | number | Date): string => {
  return dayjs(time).utc().format('D MMMM YYYY');
};

export const formatDateTimeInput = (time: string | number | Date): string => {
  const date = new Date(time);
  return (
    date.getFullYear().toString() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2) +
    'T' +
    date.toTimeString().slice(0, 5)
  );
};

export const getEighteenYearsAgo = (): Date => {
  const year = new Date();
  year.setFullYear(year.getFullYear() - 18);
  return year;
};
