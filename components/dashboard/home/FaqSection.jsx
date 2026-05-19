/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import toast from "react-hot-toast";
import { Plus, Trash2, Pencil, X, Save } from "lucide-react";
import { homeApi } from "@/utils/api";
import { extractError } from "@/utils/homeUtils";
import { Field } from "@/components/ui/Field";
import { Textarea } from "@/components/ui/Textarea";
import { Input } from "@/components/ui/Input";
import { Btn } from "@/components/ui/Btn";
import { useEffect, useState } from "react";

export default function FaqSection({ data, onRefresh }) {
    const [meta, setMeta] = useState({ sectionTitle: "", sectionHeading: "" });
    const [metaLoading, setMetaLoading] = useState(false);
    const [addForm, setAddForm] = useState({ question: "", answer: "" });
    const [addLoading, setAddLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({ question: "", answer: "" });
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
            await homeApi.updateFaqMeta(meta);
            toast.success("FAQ text saved!");
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setMetaLoading(false);
        }
    }

    async function handleAdd() {
        if (!addForm.question || !addForm.answer)
            return toast.error("Question and answer required.");
        setAddLoading(true);
        try {
            await homeApi.addFaq(addForm);
            toast.success("FAQ added!");
            setAddForm({ question: "", answer: "" });
            onRefresh();
        } catch (err) {
            toast.error(extractError(err));
        } finally {
            setAddLoading(false);
        }
    }

    function startEdit(item) {
        setEditId(item._id);
        setEditForm({ question: item.question, answer: item.answer });
    }

    async function handleSaveEdit() {
        setEditLoading(true);
        try {
            await homeApi.updateFaq(editId, editForm);
            toast.success("FAQ updated!");
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
            await homeApi.deleteFaq(id);
            toast.success("FAQ removed.");
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

            {/* Existing FAQs */}
            {data?.items?.length > 0 && (
                <div className="border-t border-gray-100 pt-5 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                        Current FAQs ({data.items.length})
                    </p>
                    <div className="space-y-2">
                        {data.items.map((item, idx) => (
                            <div
                                key={item._id}
                                className="rounded-xl border border-gray-100 bg-gray-50 overflow-hidden"
                            >
                                {editId === item._id ? (
                                    <div className="p-4 space-y-3">
                                        <Field label="Question">
                                            <Input
                                                value={editForm.question}
                                                onChange={(e) =>
                                                    setEditForm({
                                                        ...editForm,
                                                        question: e.target.value,
                                                    })
                                                }
                                            />
                                        </Field>
                                        <Field label="Answer">
                                            <Textarea
                                                value={editForm.answer}
                                                onChange={(e) =>
                                                    setEditForm({
                                                        ...editForm,
                                                        answer: e.target.value,
                                                    })
                                                }
                                                rows={4}
                                            />
                                        </Field>
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
                                    <div className="flex items-start gap-3 px-4 py-3">
                                        <span className="text-xs font-bold text-secondary/60 mt-0.5 shrink-0">
                                            Q{idx + 1}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-primary">
                                                {item.question}
                                            </p>
                                            <p className="text-xs text-ink-mute mt-0.5 line-clamp-2">
                                                {item.answer}
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
            <div className="border-t border-gray-100 pt-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-mute">
                    Add New FAQ
                </p>
                <Field label="Question *">
                    <Input
                        value={addForm.question}
                        onChange={(e) => setAddForm({ ...addForm, question: e.target.value })}
                        placeholder="How long does it take?"
                    />
                </Field>
                <Field label="Answer *">
                    <Textarea
                        value={addForm.answer}
                        onChange={(e) => setAddForm({ ...addForm, answer: e.target.value })}
                        placeholder="Your answer here..."
                        rows={4}
                    />
                </Field>
                <div className="flex justify-end">
                    <Btn loading={addLoading} onClick={handleAdd}>
                        <Plus className="w-3.5 h-3.5" /> Add FAQ
                    </Btn>
                </div>
            </div>
        </div>
    );
}
