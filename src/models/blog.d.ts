
export interface Blog {
    author: string;
    createTime: string;
    blogTxt: string;
    icon: string;
    id: number;
    status: number;
    title: string;
    top: number;
    typeOne: number;
    typeTwo: number;
    subDesc: string;
}


interface GetBlogs {
    pageNumber?: number;
    pageSize?: number;
    title?: string;
    typeOne?: number;
    top?: number;
}