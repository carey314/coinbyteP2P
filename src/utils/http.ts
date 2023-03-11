import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useUserInfoStore } from '../store/user';
import {storeToRefs} from 'pinia';
import { ElMessage } from 'element-plus';

const userInfoStore = useUserInfoStore();
const { token,username } = storeToRefs(userInfoStore);
const instance = axios.create({
  baseURL: '/api',
  timeout: 20000
});


instance.interceptors.request.use(
    function (config) {
      if(token && token !== null) {
        config.headers.Authorization = 'Bearer ' + token.value;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    if(response.data && response.data.status === 401) {
      // router.push("/login");
      userInfoStore.clearToken();
    }
    return response;
  },
  function (error) {
    let status = error.response.status;
    if(status === 401) {
      // router.push("/login");
      userInfoStore.clearToken();
    }
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