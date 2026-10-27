import type { ReactNode } from "react";

interface ArticlesPageLayoutProps {
    header?: ReactNode;
    /** Search bar + filter kategori */
    toolbar?: ReactNode;
    /** Kartu unggulan (opsional) */
    featured?: ReactNode;
    /** Grid artikel / empty state / error */
    children: ReactNode;
}

export function ArticlesPageLayout({
    header,
    toolbar,
    featured,
    children,
}: ArticlesPageLayoutProps) {
    return (
        <main className="mx-auto min-h-screen max-w-content px-10 bg-bg pb-14 font-sans text-ink dark:bg-night-bg dark:text-night-text md:pb-20">
            {header}
            <section aria-label="Cari dan filter artikel">{toolbar}</section>
            {featured && (
                <section
                    aria-label="Artikel unggulan"
                    className="mt-5 px-5 lg:px-0"
                >
                    {featured}
                </section>
            )}
            <section aria-label="Daftar artikel" className="mt-10 px-5 lg:px-0 py-10">
                {children}
            </section>
        </main>
    );
}