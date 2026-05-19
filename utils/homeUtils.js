// utils/homeUtils.js

/**
 * Convert a File object → base64 data URL (for local preview before upload)
 */
export function fileToPreview(file) {
    return new Promise((resolve, reject) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
    });
}

/**
 * Build a FormData object from a plain key→value map.
 * Values that are File instances are appended as files.
 * Values that are arrays are JSON-stringified.
 * Null / undefined values are skipped.
 */
export function buildFormData(fields = {}) {
    const fd = new FormData();
    for (const [key, value] of Object.entries(fields)) {
        if (value === null || value === undefined) continue;
        if (value instanceof File) {
            fd.append(key, value);
        } else if (Array.isArray(value)) {
            fd.append(key, JSON.stringify(value));
        } else {
            fd.append(key, String(value));
        }
    }
    return fd;
}

/**
 * Extract a readable error message from an Axios error response.
 */
export function extractError(err) {
    return (
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong"
    );
}
