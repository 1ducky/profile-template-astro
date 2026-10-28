// ============================================================
// B. MOCK: IMAGE
// ============================================================

import type { ArticleImage } from "../../types/article/entity";

export const mockImages: Record<string, ArticleImage> = {
    beijingHero: {
        src: "/assets/preview/web-prev-3.png",
        alt: "Suasana Tianjin International Cruise Home Port, China",
        caption: "Foto: Biro Beijing Disway Media",
        aspectRatio: "16/9",
    },
    ballonDor: {
        src: "/assets/preview/web-prev-2.png",
        alt: "Harry Kane saat menerima trofi Ballon d'Or 2026",
        caption: "Foto: Reuters",
        aspectRatio: "16/9",
    },
    galleryEpaper: {
        src: "/assets/preview/web-prev-1.png",
        alt: "Halaman depan e-paper Disway edisi 28 Oktober 2026",
        caption: "E-paper Disway, 28 Oktober 2026",
        aspectRatio: "4/3",
    },
    podcastStudio: {
        src: "/assets/preview/web-prev-5.png",
        alt: "Host podcast Disway di studio",
        aspectRatio: "16/9",
    },
};