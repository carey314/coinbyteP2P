
export interface Blog {
banner: string | undefined;
    author: string;
    createTime: string;
    blogTxt: string;
    icon: string;
    banner: string;
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