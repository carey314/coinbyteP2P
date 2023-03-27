import http from '../utils/http';
//Get client profile data
function getProfile() {
    return http.get("/v2/my/profile");
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
    return http.post("/v2/my/profile",data);
}
//	Get client settings
function getSettings() {
    return http.get("/v2/my/settings");
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
    return http.post("/v2/my/settings",data);
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
function logOut () {
    return http.post("/v2/my/signout");
}
//Get client permissions
function getClientPermissions () {
    return http.get(`/v2/my/permissions`);
}
//Initialize the Sign Up Wizard
interface InitializeSignUpWizard {
    "url": string,
    "utm" ? : {
        "referral" ? : string,
        "uri" ? : string
    }
}
function initializeSignUpWizard (data : InitializeSignUpWizard) {
    return http.post("/v2/my/signup/wizard",data);
}
///api/v2/my/signup
interface SignUp {
    "uuid": string,
    "email"?: string,
    "password"?: string,
    "password_confirmation"?: string,
    "device_fingerprint" ? : string,
    "addresses" ? : {},
    "info" ? : {},
    "recaptchaResponse" ? : string,
    "wizard_id"? : number
}
function signUp (data : SignUp) {
    return http.post("/v2/my/signup",data);
}
//choose person
function choosePer (data : any,uuid : string) {
    return http.post("/v1/public/wizards/" + uuid,data);
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
    choosePer
}