import http from '../utils/http';
import { PageSearchData } from '../models/searchData';

function getLoginUUID () {{
    return http.get('/health');
}}

function toLogin (data : any) {
    return http.post('/login',data);
}

function getLoginHistory(search: PageSearchData) {
    return http.post('/login_history', search);
}

export {
    getLoginUUID,
    toLogin,
    getLoginHistory
}