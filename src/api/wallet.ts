import http from '../utils/http';

function getMyAssets () {
    return http.get("/v1/accounts/async");
}

export {
    getMyAssets
}