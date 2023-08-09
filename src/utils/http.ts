// 封装API请求
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useUserInfoStore } from "../store/user";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";

const userInfoStore = useUserInfoStore();
const { token, refreshToken } = storeToRefs(userInfoStore);
// 创建实例对象
const instance = axios.create({
  baseURL: "/api",
  timeout: 20000,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

instance.interceptors.request.use(
  function (config) {
    if (token.value && token.value !== null) {
      config.headers.Accept =
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
      config.headers.Authorization = "Bearer " + token.value;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response: any) {

    console.log(response);
    console.log(response.headers);
    const token = response.headers["authorization"];
    console.log(token);
    userInfoStore.changeToken(token);

    // if (userInfoStore.isLogin) {
    //   ElMessage({
    //     message: "Token expired, please log in again!",
    //     grouping: true,
    //     type: "error",
    //   });
    //   userInfoStore.clearToken();
    // }

    // if (response.data && response.data.status === 401) {
    //   const originalRequest = response.config;
    //   if(token.value){
    //     if (!isRefreshing) {
    //       isRefreshing = true;

    //       return toRefreshToken()
    //         .then((res: any) => {
    //           const resRefresh = res.data;
    //           if (resRefresh.code === 200 || resRefresh.code === 202) {
    //             const newToken = resRefresh.data.accessToken.token;
    //             userInfoStore.changeToken(newToken);
    //             userInfoStore.changeRefreshToken(
    //               resRefresh.data.refreshToken.token
    //             );

    //             originalRequest.headers.Authorization = "Bearer " + newToken;
    //             originalRequest.baseURL = "/api";
    //             onRefreshed(newToken);
    //             return axios(originalRequest);
    //           } else {
    //             if (userInfoStore.isLogin) {
    //               ElMessage({
    //                 message: "Token expired, please log in again!",
    //                 grouping: true,
    //                 type: "error",
    //               });
    //               userInfoStore.clearToken();
    //             }
    //             return Promise.reject(new Error("Token refresh failed"));
    //           }
    //         })
    //         .catch((err: any) => {
    //           if (err.response) {
    //             const error = err.response.data.error;
    //             if (error.code === 0) {
    //               ElMessage.error(error.details[0].issue);
    //             } else {
    //               if (userInfoStore.isLogin) {
    //                 ElMessage({
    //                   message: "Token expired, please log in again!",
    //                   grouping: true,
    //                   type: "error",
    //                 });
    //                 userInfoStore.clearToken();
    //               }
    //             }
    //             return Promise.reject(err);
    //           }
    //           if (userInfoStore.isLogin) {
    //             ElMessage({
    //               message: "Token expired, please log in again!",
    //               grouping: true,
    //               type: "error",
    //             });
    //             userInfoStore.clearToken();
    //           }
    //           return Promise.reject(err);
    //         })
    //         .finally(() => {
    //           isRefreshing = false;
    //         });
    //     } else {
    //       return new Promise((resolve) => {
    //         refreshSubscribers.push((token) => {
    //           originalRequest.headers.Authorization = "Bearer " + token;
    //           originalRequest.baseURL = "/api";
    //           resolve(axios(originalRequest));
    //         });
    //       });
    //     }
    //   }
    // }
    return response;
  },
  function (error) {
    console.log("--- in error")
    let status = error.response.status;
    if (status === 401) {
      const originalRequest = error.config;
      if (token.value) {
        if (!isRefreshing) {
          isRefreshing = true;

          return toRefreshToken()
            .then((res: any) => {
              const resRefresh = res.data;
              if (resRefresh.code === 200 || resRefresh.code === 202) {
                const newToken = resRefresh.data.accessToken.token;
                userInfoStore.changeToken(newToken);
                userInfoStore.changeRefreshToken(
                  resRefresh.data.refreshToken.token
                );

                originalRequest.headers.Authorization = "Bearer " + newToken;
                originalRequest.baseURL = "/api";
                onRefreshed(newToken);
                return axios(originalRequest);
              } else {
                if (userInfoStore.isLogin) {
                  ElMessage({
                    message: "Token expired, please log in again!",
                    grouping: true,
                    type: "error",
                  });
                  userInfoStore.clearToken();
                }
                return Promise.reject(new Error("Token refresh failed"));
              }
            })
            .catch((err: any) => {
              if (err.response) {
                const error = err.response.data.error;
                if (error.code === 0) {
                  ElMessage({
                    message: error.details[0].issue,
                    grouping: true,
                    type: "error",
                  });
                } else {
                  if (userInfoStore.isLogin) {
                    ElMessage({
                      message: "Token expired, please log in again!",
                      grouping: true,
                      type: "error",
                    });
                    userInfoStore.clearToken();
                  }
                }
                return Promise.reject(err);
              }
              if (userInfoStore.isLogin) {
                ElMessage({
                  message: "Token expired, please log in again!",
                  grouping: true,
                  type: "error",
                });
                userInfoStore.clearToken();
              }
              return Promise.reject(err);
            })
            .finally(() => {
              isRefreshing = false;
            });
        } else {
          return new Promise((resolve) => {
            refreshSubscribers.push((token) => {
              originalRequest.headers.Authorization = "Bearer " + token;
              originalRequest.baseURL = "/api";
              resolve(axios(originalRequest));
            });
          });
        }
      }
    }
    return Promise.reject(error);
  }
);

const http = {
  get<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return instance.get<T>(url, {
      params: data,
      ...config,
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
      ...config,
    });
  },
};

export default http;

async function toRefreshToken() {
  try {
    const response = await axios.post(
      "/api/v2/my/refresh",
      {
        refreshToken: refreshToken.value,
      },
      {
        headers: {
          Authorization: "Bearer " + token.value,
        },
      }
    );
    if (response.status === 200 && response.statusText === "OK") {
      return response;
    } else {
      return Promise.reject(new Error("Token refresh failed"));
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
