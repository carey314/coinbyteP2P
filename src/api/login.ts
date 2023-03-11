import http from '../utils/http';
function getLoginUUID () {{
    return http.get('/v2/my/signin/wizard');
}}

function toLogin (uploadMsg : any) {
    return http.post('/v2/my/signin',uploadMsg);
}
export {
    getLoginUUID,
    toLogin
}