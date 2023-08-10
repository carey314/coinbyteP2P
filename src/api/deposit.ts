import http from '../utils/http';

//Get a list of deposit methods
function getDepositMethods() {
    return http.get("/v2/my/deposits/methods");
}
//
function getDepositGroups() {
    return http.get("/v2/my/deposits/groups");
}

// function getDepositTransactions(
//     limit: number = 10,
//     offset: number = 0,
//     sort_order: string | null,
//     sort_by: string | null,
//     type: string | null,
//     status: string | null,
//     accountId: string | null
// ) {
//     const param = { limit, offset, sort_by, sort_order, type, status, accountId }
//     return http.post("/transaction", param);
// };
function getDepositTransactions(data : any) {
    return http.post("/transaction",data);
}

export {
    getDepositMethods,
    getDepositGroups,
    getDepositTransactions
}