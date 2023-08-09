import http from '../utils/http';


function genKycToken(data: any) {
    {
        return http.post('/kyc/token', data);
    }
}

export {
    genKycToken
}