import http from '../utils/http';

//Get a list of Notices
async function getNotices () {
    // return http.get("/v2/my/announcements");
}
function markRead(id: string){
    // return http.post(`/v2/my/announcements/${id}/mark-read`)
}
function markReadAll(){
    // return http.post(`/v2/my/announcements/mark-read`)
}

export {
    getNotices,
    markRead,
    markReadAll
}