import http from '../utils/http';

//Get a list of withdrawal templates
function getWithDrawalTemplates () {
    return http.get("/v2/my/withdrawals/patterns");
}

//Get withdrawal template details
function getWithDrawalTemplateDetails (patternId : string) {
    return http.get("/v2/my/withdrawals/patterns/" + patternId);
}

export {
    getWithDrawalTemplates,
    getWithDrawalTemplateDetails,
    
}