import http from '../utils/http';

//Get a list of countries
function getCountries () {
    return http.get("/v2/my/countries");
}
//Get country details
function getCountryDetail (id : string) {
    return http.get("/v2/my/countries/" + id);
}
export {
    getCountries,
    getCountryDetail
}