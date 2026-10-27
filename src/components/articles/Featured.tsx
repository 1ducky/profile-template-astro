import type { FeaturedArticleCardProps } from "../../types/articles";
import { BookmarkButton } from "./BookMark";
import { ArticleThumbnail } from "./Thubnail";


export function FeaturedArticleCard({
    article,
    isBookmarked,
    onToggleBookmark,
    onOpen,
    ctaLabel = "Baca selengkapnya",
}: FeaturedArticleCardProps) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-card dark:border-night-line dark:bg-night-surface dark:shadow-none lg:flex-row">
            <div className="relative lg:flex-[1.2]">
                <ArticleThumbnail
                    image={article.thumbnail}
                    priority
                    className="aspect-[16/10] lg:aspect-auto lg:h-full"
                />
                <div className="absolute right-3 top-3 z-20">
                    <BookmarkButton
                        articleId={article.id}
                        isBookmarked={isBookmarked}
                        onToggle={onToggleBookmark}
                    />
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6 lg:justify-center lg:p-10">
                <p className="text-base uppercase tracking-wide text-muted dark:text-night-muted">
                    <span>{article.category.label}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{article.readingTimeMinutes} menit baca</span>
                </p>
                <h2 className="text-2xl font-semibold leading-snug tracking-tight sm:text-[2rem]">
                    <a
                        href={article.href}
                        onClick={() => onOpen?.(article)}
                        className="outline-none after:absolute after:inset-0 after:z-10 after:rounded-card after:content-[''] focus-visible:after:ring-2 focus-visible:after:ring-primary focus-visible:after:ring-offset-2"
                    >
                        {article.title}
                    </a>
                </h2>
                <p className="max-w-[60ch] text-lg leading-relaxed text-muted dark:text-night-muted">
                    {article.excerpt}
                </p>
                <span
                    aria-hidden="true"
                    className="mt-1 inline-flex items-center gap-2 font-medium group-hover:text-primary"
                >
                    {ctaLabel}
                    <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </span>
            </div>
        </article>
    );
}