export interface APIResponse<T> {
  status: number;
  data?: T | IResponse;
}

export interface IResponse {
  statusCode: number;
  message: string;
  error: string;
}

export interface LoginResponse {
  data: LoginDataResponse;
  accessToken: string;
}

export interface LoginDataResponse {
  id: string;
  email: string;
  photo_url: string;
  full_name: string;
  is_active: boolean;
}

export interface ForgetPassResponse {
  email: string;
}
