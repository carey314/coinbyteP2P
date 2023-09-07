import http from '../utils/http';
import { Bank } from '../models/bank';
import { encrypt, decrypt } from "../utils/aes";
import { PageSearchData } from '../models/searchData';
async function addBank(data: Bank){
    const bankTxt = JSON.stringify({
        bank_name: data.bank_name,
        branch_code: data.branch_code,
        account_number: data.account_number,
    });
    const info = encrypt(bankTxt);
    const payload = {
        bank_country: data.bank_country,
        currency: data.currency,
        bank_statement: data.bank_statement,
        info
    }
    return http.post("/bank_account", payload);
}

async function getBankList(params: PageSearchData) {
    return http.post('/bank_account_list', params).then(res => {
        if(res.data && res.data.data.Data) {
            res.data.data.Data = res.data.data.Data.map((v: any) => ({
                ...v,
                ...(JSON.parse(decrypt(v.info)))
            }))
        }
        return res;
    });
}

async function delBank(id: number) {
    return http.post('/bank_account_del', {
        id
    });
}

export {
    addBank,
    getBankList,
    delBank
}
