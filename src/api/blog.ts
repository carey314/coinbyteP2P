import {default as httpAdmin} from '../utils/httpAdminApi';
import { GetBlogs } from '../models/blog';
async function getBlogs(data?: any){
    let configData = {
        page: 1,
        limit: 12
    }
    if(data) {
        configData = Object.assign(configData, data);
    }
    return httpAdmin.get("/articles", configData);
}

async function getBlog(id: string){
    return httpAdmin.get("/article_detail/?id=" + id);
}

export {
    getBlogs,
    getBlog
}
