import http from '../utils/http';

//	Get a list of client accounts
function getMyAssets () {
    return http.get("/v2/my/accounts");
}
function getMyAssetsCopy () {
    return http.get("/v2/my/accounts");
}
//Get client account details
function getMyAccountDetails (accountId : string) {
    return http.get(`/v2/accounts/${accountId}`);
}
//Create a new account
function createNewAccount (data : any) {
    return http.post(`/v2/my/accounts`,data);
}
//Archive an account
function archiveAccount (accountId : string,data : any) {
    return http.post(`/v2/my/accounts/${accountId}/archive`,data);
}
//Update an account
function updateAnAccount (accountId : string,data : any) {
    return http.put(`/v2/my/accounts/${accountId}`,data);
}
//Initialize the wizard for changing a trading account password
function getInitchangeTradingAccountPassword (accountId : string) {
    return http.get(`/v2/my/accounts/${accountId}/password/wizard`);
}
//Confirm a procedure of changing a trading account password
function confirmChangingTradingAccountPassword (accountId : string,data : any) {
    return http.post(`/v2/my/accounts/${accountId}/password/confirm`,data);
}
//Change a trading account password
function changeATradingAccountPassword (accountId : string, data : any) {
    return http.put(`/v2/my/accounts/${accountId}/password`,data);
}
//Restore a trading account password
function restoreATradingAccountPassword(accountId : string, data : any) {
    return http.post(`/v2/my/accounts/${accountId}/password/restore`,data);
}


export {
    getMyAssets,
    getMyAssetsCopy,
    getMyAccountDetails,
    createNewAccount,
    archiveAccount,
    updateAnAccount,
    getInitchangeTradingAccountPassword,
    confirmChangingTradingAccountPassword,
    changeATradingAccountPassword,
    restoreATradingAccountPassword
}