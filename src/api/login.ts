import http from '../utils/http';
import { PageSearchData } from '../models/searchData';

function getLoginUUID () {{
    return http.get('/health');
}}

function toLogin (data : any) {
    return http.post('/sign_in_verify',data);
}

function getLoginHistory(search: PageSearchData) {
    return http.post('/login_history', search);
}

function forgotPassGetCode(email: string) {
    return http.post('/forget_pass', { email });
}

function forgotPassValidCode(token: string, code: any) {
    return http.post('/forget_pass_verify', { token, code });
}
function getVerificationCodeApi(phone: string) {
    return http.post('/sign_in', { phone });
}

function forgotPassUpdatePass(token: string, new_pass: string) {
    return http.post('/forget_pass_change', { token, new_pass });
}

export {
    getLoginUUID,
    toLogin,
    getLoginHistory,
    forgotPassGetCode,
    forgotPassValidCode,
    forgotPassUpdatePass,
    getVerificationCodeApi
}
