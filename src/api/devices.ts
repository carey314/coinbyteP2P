import http from '../utils/http';

//get a list of devices
function getAListOfDevices () {
    return http.get(`/v2/my/devices`);
}
//Get device details
function getDevicesDetails (deviceId : string) {
    return http.get(`/v2/my/devices/${deviceId}`);
}
//Delete a device
function deleteDevice (deviceId : string) {
    return http.delete(`/v2/my/devices/${deviceId}`);
}


export {
    getAListOfDevices,
    getDevicesDetails,
    deleteDevice
}