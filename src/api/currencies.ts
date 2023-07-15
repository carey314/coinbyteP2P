import http from '../utils/http';
import {default as httpAdmin} from '../utils/httpAdminApi';

async function queryCurrenciesType(data?: any){
    let configData = {
        pageNumber: 1,
        pageSize: 1000
    }
    if(data) {
        configData = Object.assign(configData, data);
    }
    return httpAdmin.get("/coin/info", configData);
}

async function getOneCoin(slug: string, area: string = 'US') {
    return httpAdmin.get(`/coin/info/${slug}/${area}`);
}

async function queryCurrencyInformation(symbols:string) {
    return httpAdmin.get("/coin/coingecko/latest/markets",{
        symbols
    })
}

export {
    queryCurrenciesType,
    getOneCoin,
    queryCurrencyInformation
}