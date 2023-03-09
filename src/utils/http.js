import axios from 'axios';
const instance = axios.create({
    baseURL : '/api',
    timeout : 20000
});
instance.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});
instance.interceptors.response.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});
const http = {
    get(url,data,config){
        return instance.get(url,{
            params : data,
            ...config
        });
    },
    post(url,data,config){
        return instance.post(url,data,config);
    },
    put(url,data,config){
        return instance.put(url,data,config);
    },
    patch(url,data,config){
        return instance.patch(url,data,config);
    },
    delete(url,data,config){
        return instance.delete(url,{
            data,
            ...config
        });
    }
}
export default http;