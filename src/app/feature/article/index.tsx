
import type { ArticleListResponse, ArticleResponse } from "../../../contract/article";
import { api } from "../../../lib/api/client";


export async function GetListArticle(): Promise<ArticleListResponse> {
    return (await api.get<ArticleListResponse>("/articles")).data
}
export async function GetBySlug(slug: string): Promise<ArticleResponse> {
    return (await api.get<ArticleResponse>(`/articles/${slug}`)).data
}