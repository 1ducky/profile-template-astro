export function ResolveUrl(imageSource: string, domainResolve: string): string {
    if (/^(https?:|data:)/.test(imageSource)) return imageSource
    return new URL(imageSource, domainResolve).href
}
