// utils/getImageUrl.js
export const getImageUrl = (path) => {
    if (!path) return "/placeholder-blog.jpg";
    if (path.startsWith("http")) return path;
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    return `${API_URL}${path}`;
};
