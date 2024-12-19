export const ROUTES = {
  auth: '/auth',
  login: '/auth/login',
  github: '/auth/github',
  repository: '/repository',
  repositoryList: '/repository/list',
  repositoryDetails: (id: string) => `/repository/${id}`,
  settings: '/settings',
  profileSettings: '/settings/profile',
  preferenceSettings: '/settings/preference',
  securitySettings: '/settings/security',
};
