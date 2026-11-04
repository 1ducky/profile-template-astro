import { useState } from "react";
import EditorMarkdown from "./EditorMarkDown";

export default function Editor() {
    const [md, setMD] = useState<string>("")

    function onChange(md: string) {
        setMD(md)
    }

    return (
        <>
            <EditorMarkdown markdown={md} onChange={onChange} />
            <button type="button" className="rounded-card border border-primary bg-primary px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary/50 text-white" onClick={() => console.log(md)}>Submit</button>
        </>
    )
}