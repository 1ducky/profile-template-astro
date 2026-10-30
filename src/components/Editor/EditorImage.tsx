import { usePublisher, insertImage$, Button } from "@mdxeditor/editor";
import { useImageUploader } from "./ImageUploader/ImageProvider";

export function CustomImageButton() {
    const insertImage = usePublisher(insertImage$);
    const { open } = useImageUploader();

    async function handleClick() {
        const img = await open({ title: "Sisipkan gambar" });
        if (!img) return; // pengguna menutup dialog tanpa memilih

        insertImage({
            src: img.url,      // URL final dari backend (atau URL eksternal)
            altText: img.alt,
            title: img.title,
        });
    }

    return (
        <Button title="Upload gambar" onClick={handleClick}>
            Upload gambar
        </Button>
    );
}