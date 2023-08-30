import CryptoJS from 'crypto-js';

const key = '235325fdgerteGHdsfsdewred4345341';// 32位
const iv = '4387438hfdhfdjhg';// 16位


// 加密
function encrypt(text: string) {
    return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString()
}

// 解密
function decrypt(text: string) {
    let decrypted = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8)
}

export {
    encrypt,
    decrypt
}