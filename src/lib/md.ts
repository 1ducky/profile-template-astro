
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
    breaks: false,
});

// Tambahkan atribut aman untuk tautan eksternal.
markdown.renderer.rules.link_open = (
    tokens,
    idx,
    options,
    env,
    self,
) => {
    const token = tokens[idx];
    const href = token.attrGet("href") as string;

    if (href && /^https?:\/\//i.test(href)) {
        token.attrSet("target", "_blank");
        token.attrSet("rel", "noopener noreferrer");
    }

    return self.renderToken(tokens, idx, options);
};

export function renderMarkdown(content: string): string {
    return markdown.render(content);
}
