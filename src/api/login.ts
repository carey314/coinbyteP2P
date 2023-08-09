import http from '../utils/http';
function getLoginUUID () {{
    return http.get('/health');
}}

function toLogin (data : any) {
    return http.post('/login',data);
}
export {
    getLoginUUID,
    toLogin
}