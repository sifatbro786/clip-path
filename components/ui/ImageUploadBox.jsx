"use client";

import { fileToPreview } from "@/utils/homeUtils";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function ImageUploadBox({
    preview,
    onFile,
    label = "Click or drag to upload",
    required = false,
}) {
    const ref = useRef();
    const [drag, setDrag] = useState(false);

    function handle(file) {
        if (!file) return;
        fileToPreview(file).then(() => onFile(file));
    }

    return (
        <div
            onClick={() => ref.current.click()}
            onDragOver={(e) => {
                e.preventDefault();
                setDrag(true);
            }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => {
                e.preventDefault();
                setDrag(false);
                handle(e.dataTransfer.files[0]);
            }}
            className={`relative cursor-pointer rounded-xl border-2 border-dashed transition-all overflow-hidden
                ${drag ? "border-secondary bg-secondary/5" : "border-gray-200 hover:border-secondary/50 hover:bg-gray-50"}
                ${preview ? "h-40" : "h-32"}`}
        >
            <input
                ref={ref}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handle(e.target.files[0])}
            />
            {preview ? (
                <>
                    <Image
                        width={1920}
                        height={1080}
                        src={preview}
                        alt="preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="text-white text-xs font-medium flex items-center gap-1">
                            <UploadCloud className="w-4 h-4" /> Change image
                        </div>
                    </div>
                </>
            ) : (
                <div className="h-full flex flex-col items-center justify-center gap-1.5 text-ink-mute">
                    <UploadCloud className="w-6 h-6" />
                    <span className="text-xs">{label}</span>
                    {required && <span className="text-[10px] text-secondary">Required</span>}
                </div>
            )}
        </div>
    );
}
