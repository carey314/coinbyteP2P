import http from '../utils/http';

//Get a list of product currencies
function getAListOfProductCurrencies () {
    return http.get(`/v2/my/products/currencies`);
}
//Get product currency details
function getAListOfProductCurrencieDetails (currencyId : string) {
    return http.get(`/v2/my/products/currencies/${currencyId}`);
}
//Get a list of product groups
function getAListOfProductGroups () {
    return http.get(`/v2/my/products/groups`);
}
//Get a list of product groups
function getAListOfProductGroupDetails (groupId : string) {
    return http.get(`/v2/my/products/groups/${groupId}`);
}
//	Get a list of product notes
function getAListOfProductNotes (productId : string) {
    return http.get(`/v2/my/products/${productId}/preferences`);
}
//Get product note details
function getAListOfProductNoteDetails (productId : string,preferenceId : string) {
    return http.get(`/v2/my/products/${productId}/preferences/${preferenceId}`);
}

export {
    getAListOfProductCurrencies,
    getAListOfProductCurrencieDetails,
    getAListOfProductGroups,
    getAListOfProductGroupDetails,
    getAListOfProductNotes,
    getAListOfProductNoteDetails
}