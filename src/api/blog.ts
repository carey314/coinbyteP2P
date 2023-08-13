import {default as httpAdmin} from '../utils/httpAdminApi';
import { GetBlogs } from '../models/blog';
async function getBlogs(data?: GetBlogs){
    let configData = {
        pageNumber: 1,
        pageSize: 1000
    }
    if(data) {
        configData = Object.assign(configData, data);
    }
    return httpAdmin.get("/articles", configData);
}

async function getBlog(id: string){
    return httpAdmin.get("/article_detail?id=" + id);
}

export {
    getBlogs,
    getBlog
}
