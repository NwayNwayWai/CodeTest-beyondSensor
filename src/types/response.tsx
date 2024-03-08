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
  email: string;
  password: string;
  fullname: string;
  dob: Date;
  city: string;
  role: string;
}

export interface ForgetPassResponse {
  email: string;
}
