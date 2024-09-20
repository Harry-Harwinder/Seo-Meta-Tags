// pages/api/blog/[slug].js
export default function handler(req, res) {
    const { slug } = req.query;

    const blogPosts = {
        "seo-optimization": {
            title: "SEO Optimization",
            description: "Learn how to optimize your blog for search engines.",
            author: "John Doe",
            datePublished: "2023-09-20",
        },
        "react-hooks": {
            title: "Understanding React Hooks",
            description: "A deep dive into React hooks and how to use them effectively.",
            author: "Jane Smith",
            datePublished: "2023-09-15",
        },
        "nextjs-performance": {
            title: "Next.js Performance Optimization",
            description: "Tips and techniques to optimize your Next.js apps.",
            author: "Alex Johnson",
            datePublished: "2023-09-10",
        },
    };

    const post = blogPosts[slug];

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
}