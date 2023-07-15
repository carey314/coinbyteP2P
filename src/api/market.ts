import httpAdminApi from "../utils/httpAdminApi";

function getCoinMarketCap (params:any) {
  return httpAdminApi.get('/coin/coingecko/historical/listings', params);
}
function getCoinMarketCapOhlc (params:any) {
  return httpAdminApi.get('/coin/coingecko/historical/ohlc', params);
}
function getLastCoinMarketCap (params?:any) {
  // return httpAdminApi.get('/coin/coingecko/latest/markets?symbols=ethereum,bitcoin');
  return httpAdminApi.get('/coin/coingecko/latest/markets', params);
}

export {
  getCoinMarketCap,
  getCoinMarketCapOhlc,
  getLastCoinMarketCap
}
