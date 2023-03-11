import http from '../utils/http';

//Get a list of deposit methods
function getDepositMethods() {
    return http.get("/v2/my/deposits/methods");
}
export {

}