import http from '../utils/http';
//Get client profile data
function getProfile() {
    return http.get("/user");
}
// v1/me?with=
function meWidth() {
    return http.get("/v1/me?with=");
}
//Update client profile data
interface UpdateProfile {
    "nickname"?: string,
    "locale"?: string,
    "info"?: {
        "firstName"?: string,
        "lastName"?: string,
        "middleName"?: string,
        "birthday"?: string
    }
}
function updateProfile(data : UpdateProfile) {
    return http.post("/user",data);
}
//	Get client settings
function getSettings() {
    return http.get("/user");
}
//Update client settings
interface UpdateSettings {
    "settings": {
       "locale"?: "en_US",
       "applicationColor"?: "#225577",
       "commonTheme"?: "dark-theme" | "light-theme"
    }
}
function updateSettings(data : UpdateSettings) {
    return http.post("/user",data);
}
//Get a list of client types
function getClientTypes() {  //404
    return http.get("/v2/my/clients/types");
}
//Get client type details
function getClientTypeDetails (typeId : string) {
    return http.get(`/v2/my/clients/types/${typeId}`);
}

//log out
async function logOut () {
    return http.get("/logout");
}
//Get client permissions
function getClientPermissions () {
    return http.get(`/v2/my/permissions`);
}
//Initialize the Sign Up Wizard

function initializeSignUpWizard (data : any) {
    return http.post(`/reg/email`,data);
}

function emailVefify (data : Verify) {
    return http.post(`/reg/email_verify`,data);
}
interface Verify {
    "code": string
    "email": string
}
function phoneVefify (data : phoneVerify) {
    return http.post(`/reg/phone_verify`,data);
}
interface phoneVerify {
    "type": string
    "code": string
    "phone": string
    "token": string
}
function phoneSignup (data : Number) {
    return http.post(`/reg/phone`,data);
}
interface Number {
    "phone": string
}


///api/v2/my/signup
interface SignUp {
    "email"?: string,
    "phone"?: string,
    "token"?: string,
    "pass_word" ? : string,
    "type": string
}
function signUp (data : SignUp) {
    return http.post("/reg/signup",data);
}

//登陆
function Login (data : any) {
    return http.post("/api/login",data);
}
// 获取 sumsub KYC token
function getKycToken (data : any) {
    return http.get("/api/kyc/token",data);
}
// 获取用户信息
function getUserInfo (data : any) {
    return http.get("/api/user",data);
}

//choose person
function choosePer (data : any,uuid : string) {
    return http.post("/v1/public/wizards/" + uuid,data);
}

// 验证密码接口
function verifyPassword(pass_word: string,new_email: string) {
    return http.post('email_change', { pass_word, new_email }); // 使用 email_change 接口
}

// 更新邮箱接口
function updateEmail(data: { code: string, token: string }) {
    return http.post('email_change_verify', data); // 使用 email_change_verify 接口
}
function forgetPassword(email: string) {
    return http.post('forget_pass', email); // 使用 email_change_verify 接口
}
function verifyForgetPassword(token: string, newPassword: string, code: string) {
    const data = {
        token: token,
        new_pass: newPassword,
        code: code
    };

    return http.post('forget_pass_verify', data);
}

export {
    getProfile,
    meWidth,
    updateProfile,
    getSettings,
    updateSettings,
    getClientTypes,
    logOut,
    getClientPermissions,
    initializeSignUpWizard,
    signUp,
    choosePer,
    emailVefify,
    phoneSignup,
    phoneVefify,
    verifyPassword,
    updateEmail,
    forgetPassword,
    verifyForgetPassword
}
