import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    linkPlugin,
    imagePlugin,
    toolbarPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    ListsToggle,
    BlockTypeSelect,
    CreateLink,
    InsertImage,
    linkDialogPlugin
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import { CustomImageButton } from "./EditorImage";
import { ResolveUrl } from "../../utils/resolve-url";


interface ArticleEditorProps {
    markdown: string;
    onChange: (markdown: string) => void;
}

async function uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("/api/uploads/images", {
        method: "POST",
        body: formData,
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Gagal mengunggah gambar");
    }

    const result: { url: string } = await response.json();
    return result.url;
}
async function previewUploadImage(file: File): Promise<string> {
    return URL.createObjectURL(file)
}

export default function EditorMarkdown({
    markdown,
    onChange,
}: ArticleEditorProps) {
    return (
        <MDXEditor

            markdown={markdown}
            onChange={onChange}
            plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                imagePlugin({
                    imageUploadHandler: previewUploadImage,
                    imagePreviewHandler: async (imageSource) => {
                        return ResolveUrl(imageSource, "http://localhost:8080/assets/")
                    },
                    disableImageResize: true
                }),
                toolbarPlugin({
                    toolbarContents: () => (
                        <>
                            <UndoRedo />
                            <BlockTypeSelect />
                            <BoldItalicUnderlineToggles />
                            <ListsToggle />
                            <CreateLink />
                            <CustomImageButton />
                        </>
                    ),
                }),
            ]}
        />
    );
}



