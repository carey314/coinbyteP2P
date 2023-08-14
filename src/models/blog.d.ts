
export interface Blog {
banner: string | undefined;
    author: string;
    createTime: string;
    blogTxt: string;
    icon_url: string;
    banner: string;
    id: number;
    status: number;
    title: string;
    top: number;
    typeOne: number;
    typeTwo: number;
    subDesc: string;
    banner_url: string;
    sub_desc: string;
}


interface GetBlogs {
    pageNumber?: number;
    pageSize?: number;
    title?: string;
    typeOne?: number;
    top?: number;
}