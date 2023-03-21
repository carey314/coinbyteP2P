import http from '../utils/http';

//Get authorization history
function getAuthorizationHistory () {
    return http.get('/v2/my/authorizations');
}
//Get authorization details
function getAuthorizationDetails (authorizationId : string) {
    return http.get(`/v2/my/authorizations/${authorizationId}`);
}

export {
    getAuthorizationHistory,
    getAuthorizationDetails
}