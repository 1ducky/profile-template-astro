import type { ArticleGridProps } from "../../types/articles";
import { ArticleCard } from "./Card";


/**
 * Tailwind tidak mendukung class dinamis (`grid-cols-${n}`),
 * jadi setiap nilai dipetakan ke string class lengkap.
 */
const MOBILE = { 1: "grid-cols-1", 2: "grid-cols-2" } as const;
const TABLET = { 2: "md:grid-cols-2", 3: "md:grid-cols-3" } as const;
const DESKTOP = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" } as const;

const DEFAULT_COLUMNS = { mobile: 2, tablet: 2, desktop: 3 } as const;

export function ArticleGrid({
    articles,
    bookmarkedIds,
    onToggleBookmark,
    columns = DEFAULT_COLUMNS,
}: ArticleGridProps) {
    return (
        <ul
            className={`m-0 grid list-none gap-4 p-0 md:gap-6 ${MOBILE[columns.mobile]} ${TABLET[columns.tablet]} ${DESKTOP[columns.desktop]}`}
        >
            {articles.map((article) => (
                <li key={article.id}>
                    <ArticleCard
                        article={article}
                        isBookmarked={bookmarkedIds.has(article.id)}
                        onToggleBookmark={onToggleBookmark}
                    />
                </li>
            ))}
        </ul>
    );
}