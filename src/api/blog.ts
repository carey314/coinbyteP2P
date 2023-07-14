import {default as httpAdmin} from '../utils/httpAdminApi';

async function getBlogs(){
    return httpAdmin.get("/coin/blog",{
        pageNumber: 1,
        pageSize: 10000
    });
}

async function getBlog(id: string){
    return httpAdmin.get("/coin/blog/" + id);
}

export {
    getBlogs,
    getBlog
}
