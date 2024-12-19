export const ROUTES = {
  auth: '/auth',
  login: '/auth/login',
  github: '/auth/github',
  repository: '/repository',
  repositoryList: '/repository/list',
  repositoryDetails: (id: string) => `/repository/${id}`,
  setting: '/setting',
  profileSetting: '/setting/profile',
  preferenceSetting: '/setting/preference',
  securitySetting: '/setting/security',
};
