import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { getToken } from '@/utils/auth';

const appAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/admin`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // withCredentials: true
});

appAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      const token = getToken();
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }
    return config;
  },
  (error: AxiosError) => {
    if (error.response?.status == 401) {
      window.location.href = process.env.NEXT_PUBLIC_FRONTEND_URL + '/auth/login';
      console.log('ERR');
      // return redirect("/chef/login");
    }
    return error.response;
  }
);

appAxios.interceptors.response.use(
  async (response: AxiosResponse) => {
    console.log('axiosResponse', response);

    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status == 401) {
      window.location.href = process.env.NEXT_PUBLIC_FRONTEND_URL + '/auth/login';
      console.log('ERR');
      // return redirect("/chef/login");
    }
    return error.response;
  }
);

export default appAxios;
