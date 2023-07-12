import http from '../utils/http';
import {default as httpAdmin} from '../utils/httpAdminApi';

async function queryCurrenciesType(){
    return httpAdmin.get("/coin/info",{
        pageNumber: 1,
        pageSize: 10000
    });
}

export {
    queryCurrenciesType
}