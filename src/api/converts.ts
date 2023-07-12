import http from '../utils/http';

//Get currency rates
function getBaseCurrency (baseCurrency : string) {
    return http.get("/v2/my/rates/" + baseCurrency);
}
//Get an exchange rate for a currency pair
async function getExchangeRateForCurrencyPair (baseCurrency : string, quoteCurrency : string) {
    return http.get(`/v2/my/rates/${baseCurrency}/${quoteCurrency}`);
}
//Get a list of paired currencies
function getPairedCurrencies (alphabeticCode : string) {
    return http.get(`/v2/my/currencies/${alphabeticCode}/paired`);
}
//	Exchange currencies
interface Exchanges {
    amount : string,
    destinationAccountId : number,
    quoteId : string,
    sourceAccountId : number
}
function exchangeCurrencies (exchange : Exchanges) {
    return http.post('/v2/my/exchanges', exchange);
}

export {
    getBaseCurrency,
    getExchangeRateForCurrencyPair,
    getPairedCurrencies,
    exchangeCurrencies
}