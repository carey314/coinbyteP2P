import http from '../utils/http';

//Get a list of transactions
function getTransactions () {
    return http.get("/v2/my/transactions");
};

//Get transaction details  /api/v2/transactions/{transactionId}
function getTransactionDetails (id : string) {
    return http.get("/v2/transactions/" + id);
}

export {
    getTransactions,
    getTransactionDetails
}
