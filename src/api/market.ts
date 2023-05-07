import httpAdminApi from "../utils/httpAdminApi";

function getCoinMarketCap () {
  return httpAdminApi.get('/coin/coinmarketcap/listings?start=1&limit=10&convert=AUD');
}

export {
  getCoinMarketCap
}