export interface AuthState {
  id: string | null;
  username: string | null;
  profileImageUrl: string | null;
  token: string | null;
  accessExpirationTime: number | null;
  isLoggedIn: boolean | null;
}

export interface LoginPayload {
  token: string;
  id: string;
  username: string;
  profileImageUrl: string;
}

export interface AuthPayload {
  accessExpirationTime: number;
  token: string;
  id: string;
  username: string;
  profileImageUrl: string;
}

export type UpdateUserInfoPayload = Partial<AuthPayload>;
