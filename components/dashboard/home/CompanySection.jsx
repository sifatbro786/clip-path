"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Trash2, Loader2, Save, UploadCloud } from "lucide-react";
import { homeApi } from "@/utils/api";
import { fileToPreview, extractError } from "@/utils/homeUtils";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Btn } from "@/components/ui/Btn";
import Image from "next/image";

/* eslint-disable react-hooks/set-state-in-effect */
export default function CompanySection({ data, onRefresh }) {
    const [meta, setMeta] = useState({ title: "", heading: "" });
    const [metaLoading, setMetaLoading] = useState(false);
    const [logoFiles, setLogoFiles] = useState([]);
    const [logoPreviews, setLogoPreviews] = useState([]);
    const [logoLoading, setLogoLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const fileRef = useRef();

    useEffect(() => {
        if (data) setMeta({ title: data.title || "", heading: data.heading || "" });
    }, [data]);

    async function handleLogoFiles(files) {
        const arr = Array.from(files);
        setLogoFiles(arr);
        const previews = await Promise.all(arr.map(fileToPreview));
        setLogoPreviews(previews);
    }

    async function handleSaveMeta() {
        setMetaLoading(true);
        try {
            await homeApi.updateCompanyMeta(meta);
            toast.success("Company meta saved!");
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setMetaLoading(false);
        }
    }

    async function handleUploadLogos() {
        if (!logoFiles.length) return toast.error("Select at least one logo.");
        setLogoLoading(true);
        try {
            const fd = new FormData();
            logoFiles.forEach((f) => fd.append("logos", f));
            await homeApi.addCompanyLogos(fd);
            toast.success("Logos uploaded!");
            setLogoFiles([]);
            setLogoPreviews([]);
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setLogoLoading(false);
        }
    }

    async function handleDeleteLogo(id) {
        setDeletingId(id);
        try {
            await homeApi.deleteCompanyLogo(id);
            toast.success("Logo removed.");
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setDeletingId(null);
        }
    }

    return (
        <div className="space-y-6">
            {/* Meta */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Section Title">
                    <Input
                        value={meta.title}
                        onChange={(e) => setMeta({ ...meta, title: e.target.value })}
                        placeholder="Trusted by 4,000+ brands..."
                    />
                </Field>
                <Field label="Heading">
                    <Input
                        value={meta.heading}
                        onChange={(e) => setMeta({ ...meta, heading: e.target.value })}
                        placeholder="Edits That Sell..."
                    />
                </Field>
                <div className="md:col-span-2 flex justify-end">
                    <Btn loading={metaLoading} onClick={handleSaveMeta}>
                        <Save className="w-3.5 h-3.5" /> Save Text
                    </Btn>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                    Company Logos
                </p>

                {/* Existing logos */}
                {data?.logos?.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {data.logos.map((logo) => (
                            <div
                                key={logo._id}
                                className="relative group w-16 h-16 rounded-xl border border-gray-200 overflow-hidden bg-gray-50"
                            >
                                <Image
                                    width={64}
                                    height={64}
                                    src={logo.image}
                                    alt="logo"
                                    className="w-full h-full object-contain p-2"
                                />
                                <button
                                    onClick={() => handleDeleteLogo(logo._id)}
                                    disabled={deletingId === logo._id}
                                    className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {deletingId === logo._id ? (
                                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                                    ) : (
                                        <Trash2 className="w-4 h-4 text-white" />
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Upload new logos */}
                <div
                    onClick={() => fileRef.current.click()}
                    className="cursor-pointer rounded-xl border-2 border-dashed border-gray-200 hover:border-secondary/50 hover:bg-gray-50 transition-all p-6 flex flex-col items-center gap-2 text-ink-mute"
                >
                    <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleLogoFiles(e.target.files)}
                    />
                    <UploadCloud className="w-6 h-6" />
                    <span className="text-xs">Click to select multiple logos</span>
                </div>

                {logoPreviews.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {logoPreviews.map((src, i) => (
                            <div
                                key={i}
                                className="w-16 h-16 rounded-xl border border-secondary/40 overflow-hidden bg-gray-50"
                            >
                                <Image
                                    width={64}
                                    height={64}
                                    src={src}
                                    alt=""
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>
                        ))}
                        <div className="flex items-center">
                            <Btn loading={logoLoading} onClick={handleUploadLogos}>
                                <UploadCloud className="w-3.5 h-3.5" /> Upload {logoFiles.length}{" "}
                                Logo{logoFiles.length > 1 ? "s" : ""}
                            </Btn>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
