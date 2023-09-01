import http from '../utils/http';
import { Bank } from '../models/bank';
import { encrypt } from "../utils/aes";
async function addBank(data: Bank){
    const bankTxt = JSON.stringify({
        bank_name: data.bank_name,
        branch_code: data.branch_code,
        account_number: data.account_number,
        bank_statement: data.bank_statement,
    });
    const info = encrypt(bankTxt);
    const payload = {
        bank_country: data.bank_country,
        currency: data.currency,
        info
    }
    return http.post("/bank_account", payload);
}

export {
    addBank
}
