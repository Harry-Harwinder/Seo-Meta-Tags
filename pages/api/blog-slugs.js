// pages/api/blog-slugs.js
export default function handler(req, res) {
    const blogSlugs = [
        { slug: "seo-optimization" },
        { slug: "react-hooks" },
        { slug: "nextjs-performance" },
    ];
    res.status(200).json(blogSlugs);
}