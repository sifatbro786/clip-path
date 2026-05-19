/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { homeApi } from "@/utils/api";
import { fileToPreview, buildFormData } from "@/utils/homeUtils";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { ImageUploadBox } from "@/components/ui/ImageUploadBox";
import { Btn } from "@/components/ui/Btn";

export default function HeroSection({ data, onRefresh }) {
    const [form, setForm] = useState({ eyebrow: "", heading: "", paragraph: "" });
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data) {
            setForm({
                eyebrow: data.eyebrow || "",
                heading: data.heading || "",
                paragraph: data.paragraph || "",
            });
            setPreview(data.image || null);
        }
    }, [data]);

    async function handleImageFile(file) {
        setImageFile(file);
        const url = await fileToPreview(file);
        setPreview(url);
    }

    async function handleSave() {
        if (!preview && !imageFile) return toast.error("Hero image is required.");
        setLoading(true);
        try {
            const fd = buildFormData({
                ...form,
                image: imageFile || undefined,
            });
            await homeApi.updateHero(fd);
            toast.success("Hero section saved!");
            setImageFile(null);
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-4">
                <Field label="Eyebrow Text">
                    <Input
                        value={form.eyebrow}
                        onChange={(e) => setForm({ ...form, eyebrow: e.target.value })}
                        placeholder="Book a free 30-minute call"
                    />
                </Field>
                <Field label="Heading">
                    <Input
                        value={form.heading}
                        onChange={(e) => setForm({ ...form, heading: e.target.value })}
                        placeholder="Professional Photo Editing..."
                    />
                </Field>
                <Field label="Paragraph">
                    <Textarea
                        value={form.paragraph}
                        onChange={(e) => setForm({ ...form, paragraph: e.target.value })}
                        placeholder="Hero paragraph text..."
                    />
                </Field>
            </div>
            <div className="space-y-4">
                <Field label="Hero Image">
                    <ImageUploadBox
                        preview={preview}
                        onFile={handleImageFile}
                        required={!data?.image}
                    />
                    <p className="text-[10px] text-ink-mute">
                        Recommended: 1000×1000px. Always uploaded to Cloudinary.
                    </p>
                </Field>
            </div>
            <div className="md:col-span-2 flex justify-end">
                <Btn loading={loading} onClick={handleSave}>
                    <Save className="w-3.5 h-3.5" /> Save Hero
                </Btn>
            </div>
        </div>
    );
}
