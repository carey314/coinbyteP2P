import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const instance = axios.create({
  baseURL: '/api',
  timeout: 20000
});

instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const http = {
  get<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.get<T>(url, {
      params: data,
      ...config
    });
  },
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.post<T>(url, data, config);
  },
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.put<T>(url, data, config);
  },
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.patch<T>(url, data, config);
  },
  delete<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.delete<T>(url, {
      data,
      ...config
    });
  }
};

export default http;