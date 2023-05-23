import httpAdminApi from "../utils/httpAdminApi";

function getCoinMarketCap () {
  return httpAdminApi.get('/coin/coinmarketcap/historical/listings?symbol=BTC,ETH&convert=AUD&timeStart=2023-05-01&timeEnd=2023-05-02');
}
function getLastCoinMarketCap () {
  return httpAdminApi.get('/coin/coinmarketcap/latest/listings?symbol=BTC,ETH&convert=AUD');
}
export {
  getCoinMarketCap,
  getLastCoinMarketCap
}