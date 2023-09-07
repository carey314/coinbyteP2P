import http from '../utils/http';

//Get a list of transactions
function getTransactions () {
    return http.get("/v2/my/transactions");
};

//Get transaction details  /api/v2/transactions/{transactionId}
function getTransactionDetails (id : string) {
    return http.get("/v2/transactions/" + id);
}

interface Transaction {
    country: string;
    currency: string;
    pay_method: string;
    amount: number;
    crypto: string;
}

function addTransaction(data: Transaction) {
    return http.post("/transaction", data);
}
interface TransactionList {
    page: number;
    page_size: number;
}
function getTransactionList(searchData: TransactionList = {
    page: 0,
    page_size: 10
}) {
    return http.post("/transaction_list", searchData);
}

export {
    getTransactions,
    getTransactionDetails,
    addTransaction,
    getTransactionList
}
