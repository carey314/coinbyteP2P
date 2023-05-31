import httpAdminApi from "../utils/httpAdminApi";

function getCoinMarketCap (params:any) {
  return httpAdminApi.get('/coin/coingecko/historical/listings', params);
}
function getCoinMarketCapOhlc (params:any) {
  return httpAdminApi.get('/coin/coingecko/historical/ohlc', params);
}
function getLastCoinMarketCap () {
  return httpAdminApi.get('/coin/coingecko/latest/markets?symbols=ethereum,bitcoin');
}

export {
  getCoinMarketCap,
  getCoinMarketCapOhlc,
  getLastCoinMarketCap
}
