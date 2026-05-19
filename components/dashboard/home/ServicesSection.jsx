/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import toast from "react-hot-toast";
import { Plus, Trash2, Pencil, X, Save } from "lucide-react";
import { homeApi } from "@/utils/api";
import { fileToPreview, buildFormData, extractError } from "@/utils/homeUtils";
import { useEffect, useState } from "react";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Btn } from "@/components/ui/Btn";
import { ImageUploadBox } from "@/components/ui/ImageUploadBox";
import { Textarea } from "@/components/ui/Textarea";
import Image from "next/image";

export default function ServicesSection({ data, onRefresh }) {
    const [meta, setMeta] = useState({ sectionTitle: "", sectionHeading: "" });
    const [metaLoading, setMetaLoading] = useState(false);

    // Add form
    const [addForm, setAddForm] = useState({ title: "", description: "" });
    const [addIcon, setAddIcon] = useState(null);
    const [addPreview, setAddPreview] = useState(null);
    const [addLoading, setAddLoading] = useState(false);

    // Edit state
    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({ title: "", description: "" });
    const [editIcon, setEditIcon] = useState(null);
    const [editPreview, setEditPreview] = useState(null);
    const [editLoading, setEditLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        if (data)
            setMeta({
                sectionTitle: data.sectionTitle || "",
                sectionHeading: data.sectionHeading || "",
            });
    }, [data]);

    async function handleSaveMeta() {
        setMetaLoading(true);
        try {
            await homeApi.updateServicesMeta(meta);
            toast.success("Section text saved!");
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setMetaLoading(false);
        }
    }

    async function handleAddIconFile(file) {
        setAddIcon(file);
        setAddPreview(await fileToPreview(file));
    }

    async function handleAdd() {
        if (!addForm.title || !addForm.description)
            return toast.error("Title and description required.");
        if (!addIcon) return toast.error("Service icon is required.");
        setAddLoading(true);
        try {
            const fd = buildFormData({ ...addForm, icon: addIcon });
            await homeApi.addService(fd);
            toast.success("Service added!");
            setAddForm({ title: "", description: "" });
            setAddIcon(null);
            setAddPreview(null);
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setAddLoading(false);
        }
    }

    function startEdit(item) {
        setEditId(item._id);
        setEditForm({ title: item.title, description: item.description });
        setEditPreview(item.icon);
        setEditIcon(null);
    }

    async function handleEditIconFile(file) {
        setEditIcon(file);
        setEditPreview(await fileToPreview(file));
    }

    async function handleSaveEdit() {
        setEditLoading(true);
        try {
            const fd = buildFormData({ ...editForm, icon: editIcon || undefined });
            await homeApi.updateService(editId, fd);
            toast.success("Service updated!");
            setEditId(null);
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setEditLoading(false);
        }
    }

    async function handleDelete(id) {
        setDeletingId(id);
        try {
            await homeApi.deleteService(id);
            toast.success("Service removed.");
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
                        value={meta.sectionTitle}
                        onChange={(e) => setMeta({ ...meta, sectionTitle: e.target.value })}
                    />
                </Field>
                <Field label="Section Heading">
                    <Input
                        value={meta.sectionHeading}
                        onChange={(e) => setMeta({ ...meta, sectionHeading: e.target.value })}
                    />
                </Field>
                <div className="md:col-span-2 flex justify-end">
                    <Btn loading={metaLoading} onClick={handleSaveMeta}>
                        <Save className="w-3.5 h-3.5" /> Save Text
                    </Btn>
                </div>
            </div>

            {/* Existing items */}
            {data?.items?.length > 0 && (
                <div className="border-t border-gray-100 pt-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                        Current Services
                    </p>
                    <div className="space-y-2">
                        {data.items.map((item) => (
                            <div
                                key={item._id}
                                className="rounded-xl border border-gray-100 bg-gray-50 overflow-hidden"
                            >
                                {editId === item._id ? (
                                    <div className="p-4 space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-mute">
                                                    Icon
                                                </p>
                                                <ImageUploadBox
                                                    preview={editPreview}
                                                    onFile={handleEditIconFile}
                                                />
                                            </div>
                                            <div className="md:col-span-2 space-y-3">
                                                <Field label="Title">
                                                    <Input
                                                        value={editForm.title}
                                                        onChange={(e) =>
                                                            setEditForm({
                                                                ...editForm,
                                                                title: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </Field>
                                                <Field label="Description">
                                                    <Textarea
                                                        value={editForm.description}
                                                        onChange={(e) =>
                                                            setEditForm({
                                                                ...editForm,
                                                                description: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-end">
                                            <Btn variant="ghost" onClick={() => setEditId(null)}>
                                                <X className="w-3.5 h-3.5" /> Cancel
                                            </Btn>
                                            <Btn loading={editLoading} onClick={handleSaveEdit}>
                                                <Save className="w-3.5 h-3.5" /> Save
                                            </Btn>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3 px-4 py-3">
                                        <Image
                                            width={36}
                                            height={36}
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-9 h-9 object-contain rounded-lg bg-white border border-gray-200 p-1 shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-primary truncate">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-ink-mute truncate">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex gap-1.5 shrink-0">
                                            <Btn variant="ghost" onClick={() => startEdit(item)}>
                                                <Pencil className="w-3.5 h-3.5" />
                                            </Btn>
                                            <Btn
                                                variant="danger"
                                                onClick={() => handleDelete(item._id)}
                                                loading={deletingId === item._id}
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </Btn>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Add new */}
            <div className="border-t border-gray-100 pt-5 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                    Add New Service
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-mute">
                            Icon <span className="text-secondary">*</span>
                        </p>
                        <ImageUploadBox preview={addPreview} onFile={handleAddIconFile} required />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                        <Field label="Title *">
                            <Input
                                value={addForm.title}
                                onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                                placeholder="Background Removal"
                            />
                        </Field>
                        <Field label="Description *">
                            <Textarea
                                value={addForm.description}
                                onChange={(e) =>
                                    setAddForm({ ...addForm, description: e.target.value })
                                }
                                placeholder="Short description..."
                            />
                        </Field>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Btn loading={addLoading} onClick={handleAdd}>
                        <Plus className="w-3.5 h-3.5" /> Add Service
                    </Btn>
                </div>
            </div>
        </div>
    );
}
