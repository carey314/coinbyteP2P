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
//....






export {
    getProfile,
    meWidth,
    updateProfile,
    getSettings,
    updateSettings,
    getClientTypes
}