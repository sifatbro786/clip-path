/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import toast from "react-hot-toast";
import { Plus, Trash2, Pencil, X, Save } from "lucide-react";
import { homeApi } from "@/utils/api";
import { fileToPreview, extractError } from "@/utils/homeUtils";
import { useEffect, useState } from "react";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Btn } from "@/components/ui/Btn";
import { ImageUploadBox } from "@/components/ui/ImageUploadBox";
import { Textarea } from "@/components/ui/Textarea";
import Image from "next/image";

export default function DifferenceSection({ data, onRefresh }) {
    const [meta, setMeta] = useState({ sectionTitle: "", sectionHeading: "" });
    const [metaLoading, setMetaLoading] = useState(false);

    const emptyAdd = { title: "", description: "", builtFor: "", left: true };
    const [addForm, setAddForm] = useState(emptyAdd);
    const [addBefore, setAddBefore] = useState(null);
    const [addAfter, setAddAfter] = useState(null);
    const [addBeforePreview, setAddBeforePreview] = useState(null);
    const [addAfterPreview, setAddAfterPreview] = useState(null);
    const [addLoading, setAddLoading] = useState(false);

    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [editBefore, setEditBefore] = useState(null);
    const [editAfter, setEditAfter] = useState(null);
    const [editBeforePreview, setEditBeforePreview] = useState(null);
    const [editAfterPreview, setEditAfterPreview] = useState(null);
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
            await homeApi.updateDifferenceMeta(meta);
            toast.success("Section text saved!");
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setMetaLoading(false);
        }
    }

    async function handleAdd() {
        if (!addForm.title || !addForm.description)
            return toast.error("Title and description required.");
        if (!addBefore || !addAfter)
            return toast.error("Both before and after images are required.");
        setAddLoading(true);
        try {
            const fd = new FormData();
            fd.append("title", addForm.title);
            fd.append("description", addForm.description);
            fd.append("left", String(addForm.left));
            fd.append(
                "builtFor",
                JSON.stringify(
                    addForm.builtFor
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                ),
            );
            fd.append("beforeImage", addBefore);
            fd.append("afterImage", addAfter);
            await homeApi.addDifferenceItem(fd);
            toast.success("Item added!");
            setAddForm(emptyAdd);
            setAddBefore(null);
            setAddAfter(null);
            setAddBeforePreview(null);
            setAddAfterPreview(null);
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setAddLoading(false);
        }
    }

    function startEdit(item) {
        setEditId(item._id);
        setEditForm({
            title: item.title,
            description: item.description,
            builtFor: (item.builtFor || []).join(", "),
            left: item.left,
        });
        setEditBeforePreview(item.beforeImage);
        setEditAfterPreview(item.afterImage);
        setEditBefore(null);
        setEditAfter(null);
    }

    async function handleSaveEdit() {
        setEditLoading(true);
        try {
            const fd = new FormData();
            fd.append("title", editForm.title);
            fd.append("description", editForm.description);
            fd.append("left", String(editForm.left));
            fd.append(
                "builtFor",
                JSON.stringify(
                    editForm.builtFor
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean),
                ),
            );
            if (editBefore) fd.append("beforeImage", editBefore);
            if (editAfter) fd.append("afterImage", editAfter);
            await homeApi.updateDifferenceItem(editId, fd);
            toast.success("Item updated!");
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
            await homeApi.deleteDifferenceItem(id);
            toast.success("Item removed.");
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setDeletingId(null);
        }
    }

    return (
        <div className="space-y-6">
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

            {/* Existing */}
            {data?.items?.length > 0 && (
                <div className="border-t border-gray-100 pt-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                        Current Items
                    </p>
                    {data.items.map((item) => (
                        <div
                            key={item._id}
                            className="rounded-xl border border-gray-100 bg-gray-50 overflow-hidden"
                        >
                            {editId === item._id ? (
                                <div className="p-4 space-y-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-mute mb-1.5">
                                                Before Image
                                            </p>
                                            <ImageUploadBox
                                                preview={editBeforePreview}
                                                onFile={async (f) => {
                                                    setEditBefore(f);
                                                    setEditBeforePreview(await fileToPreview(f));
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-mute mb-1.5">
                                                After Image
                                            </p>
                                            <ImageUploadBox
                                                preview={editAfterPreview}
                                                onFile={async (f) => {
                                                    setEditAfter(f);
                                                    setEditAfterPreview(await fileToPreview(f));
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                                        <Field label="Built For (comma separated)">
                                            <Input
                                                value={editForm.builtFor}
                                                onChange={(e) =>
                                                    setEditForm({
                                                        ...editForm,
                                                        builtFor: e.target.value,
                                                    })
                                                }
                                                placeholder="eCommerce, Brands"
                                            />
                                        </Field>
                                        <div className="md:col-span-2">
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
                                        <div>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={editForm.left}
                                                    onChange={(e) =>
                                                        setEditForm({
                                                            ...editForm,
                                                            left: e.target.checked,
                                                        })
                                                    }
                                                    className="w-4 h-4 accent-secondary"
                                                />
                                                <span className="text-sm text-ink-soft">
                                                    Text on left side
                                                </span>
                                            </label>
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
                                    <div className="flex gap-1.5 shrink-0">
                                        <Image
                                            width={50}
                                            height={50}
                                            src={item.beforeImage}
                                            alt="before"
                                            className="w-12 h-10 object-cover rounded-lg border border-gray-200"
                                        />
                                        <Image
                                            width={50}
                                            height={50}
                                            src={item.afterImage}
                                            alt="after"
                                            className="w-12 h-10 object-cover rounded-lg border border-gray-200"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-primary truncate">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-ink-mute">
                                            {(item.builtFor || []).join(", ")}
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
            )}

            {/* Add new */}
            <div className="border-t border-gray-100 pt-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                    Add New Item
                </p>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-mute mb-1.5">
                            Before Image <span className="text-secondary">*</span>
                        </p>
                        <ImageUploadBox
                            preview={addBeforePreview}
                            onFile={async (f) => {
                                setAddBefore(f);
                                setAddBeforePreview(await fileToPreview(f));
                            }}
                            required
                        />
                    </div>
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-mute mb-1.5">
                            After Image <span className="text-secondary">*</span>
                        </p>
                        <ImageUploadBox
                            preview={addAfterPreview}
                            onFile={async (f) => {
                                setAddAfter(f);
                                setAddAfterPreview(await fileToPreview(f));
                            }}
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Title *">
                        <Input
                            value={addForm.title}
                            onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                            placeholder="Background Removal"
                        />
                    </Field>
                    <Field label="Built For (comma separated)">
                        <Input
                            value={addForm.builtFor}
                            onChange={(e) => setAddForm({ ...addForm, builtFor: e.target.value })}
                            placeholder="eCommerce, Brands, Agencies"
                        />
                    </Field>
                    <div className="md:col-span-2">
                        <Field label="Description *">
                            <Textarea
                                value={addForm.description}
                                onChange={(e) =>
                                    setAddForm({ ...addForm, description: e.target.value })
                                }
                                placeholder="Describe this service..."
                            />
                        </Field>
                    </div>
                    <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={addForm.left}
                                onChange={(e) => setAddForm({ ...addForm, left: e.target.checked })}
                                className="w-4 h-4 accent-secondary"
                            />
                            <span className="text-sm text-ink-soft">Text on left side</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Btn loading={addLoading} onClick={handleAdd}>
                        <Plus className="w-3.5 h-3.5" /> Add Item
                    </Btn>
                </div>
            </div>
        </div>
    );
}
