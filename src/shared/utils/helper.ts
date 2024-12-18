import { clsx, type ClassValue } from 'clsx';
import _ from 'lodash';
import { twMerge } from 'tailwind-merge';
import { JsonValue } from '../types';

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const omitEmptyKeys = <T extends Record<string, JsonValue>>(
  obj: T,
  excludes: string[] = [],
) =>
  _.omitBy(obj, (value, key) => {
    return (
      (!excludes.includes(key) && (value === '' || value === undefined || value === null)) ||
      (_.isArray(value) && value.length === 0) ||
      (_.isObject(value) && _.isEmpty(value))
    );
  });

export const omitNullishKeys = <T extends Record<string, JsonValue>>(
  obj: T,
  excludes: string[] = [],
) =>
  _.omitBy(obj, (value, key) => {
    return !excludes.includes(key) && !value;
  });

export const updateEmptyToNull = <T extends JsonValue>(obj: T): T => {
  if (_.isArray(obj)) {
    return obj.map((item) => updateEmptyToNull(item)) as T;
  }

  if (_.isObject(obj) && !_.isArray(obj)) {
    return _.mapValues(obj as Record<string, JsonValue>, (value) => {
      if (_.isObject(value) || _.isArray(value)) {
        return updateEmptyToNull(value);
      }
      return value === '' || value === undefined ? null : value;
    }) as T;
  }

  return obj;
};

export const pickExactObjKeys = <
  T extends Record<string, JsonValue>,
  U extends Record<string, JsonValue>,
>(
  obj: T,
  pickObj: U,
): Pick<U, Extract<keyof T, keyof U>> => {
  return _.pick(pickObj, Object.keys(obj)) as Pick<U, Extract<keyof T, keyof U>>;
};

export const getInitials = (str: string): string => {
  const words = str.split(' ');
  const firstTwoLetters = words.map((word) => word.charAt(0)).slice(0, 2);
  const result = firstTwoLetters.join('');

  return result;
};
