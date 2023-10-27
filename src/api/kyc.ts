import http from '../utils/http';


function genKycToken(data: any) {
    {
        return http.post('/kyc/token', data);
    }
}

function resetKyc(data: any) {
    {
        return http.post('/kyc/reset', data);
    }
}
export {
    genKycToken,
    resetKyc
}
