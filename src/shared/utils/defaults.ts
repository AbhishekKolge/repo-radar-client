import { uniqueId } from 'lodash';
import { ListCheck, Settings } from 'lucide-react';
import { ROUTES } from './getters';

export const TOP_BAR_CONFIG = {
  barColors: {
    0: '#18181b',
  },
  barThickness: 3,
};
export const DROPZONE_IMAGE_FORMAT = {
  'image/jpeg': [],
  'image/jpg': [],
  'image/png': [],
};
export const IMAGE_EXTENSIONS = ['jpeg', 'jpg', 'png'];
export const MAX_FILE_SIZE = 1024 * 1024;
export const UNITS = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
export const PAGE_SIZE = 10;
export const DEBOUNCE_TIME = 1000;
export const THROTTLE_TIME = 2000;
export const DEFAULT_PAGE = 1;
export const AUTH_STORAGE_NAME = 'auth';
export const MOBILE_BREAKPOINT = 640;
export const TABLET_BREAKPOINT = 768;
export const DESKTOP_BREAKPOINT = 1024;
export const SIDEBAR_OPTIONS = [
  {
    id: uniqueId(),
    title: 'Repository',
    url: ROUTES.repository,
    icon: ListCheck,
  },
  {
    id: uniqueId(),
    title: 'Settings',
    url: ROUTES.settings,
    icon: Settings,
  },
];
