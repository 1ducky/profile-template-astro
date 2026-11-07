import { apiRequest } from "../../../api-client";
import type { ArticleListResponse, ArticleResponse } from "../../../api-client/contract/article";


export async function GetListArticle(): Promise<ArticleListResponse>{
    return apiRequest<ArticleListResponse>("/articles",{})
}
export async function GetBySlug(slug:string): Promise<ArticleResponse>{
    return apiRequest<ArticleResponse>(`/articles/${slug}`,{})
}