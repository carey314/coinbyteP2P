import http from '../utils/http';

function getMyAssets () {
    return http.get("/v2/my/accounts");
}

function getMyAssetsCopy () {
    return http.get("/v2/my/accounts");
}

export {
    getMyAssets,
    getMyAssetsCopy
}