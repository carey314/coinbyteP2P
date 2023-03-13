import http from '../utils/http';

function getMyAssets () {
    return http.get("/v1/accounts/async");
}

function getMyAssetsCopy () {
    return http.get("/v1/accounts");
}

export {
    getMyAssets,
    getMyAssetsCopy
}