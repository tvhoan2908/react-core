export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
}
