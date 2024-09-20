# SEO Meta Tags Project

This is a Next.js project that demonstrates how to implement SEO meta tags dynamically for blog posts. It includes API routes for fetching blog post data and slugs.

## Features

- Dynamic SEO meta tags based on blog post content
- Static generation of blog post pages
- API routes for fetching blog data

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/seo-meta-tags.git
   cd seo-meta-tags

   ```

2. **Install Dependenices**:

   ```bash
   npm install
   ```

3. **Start the Development Server: Run the Next.js development server:**

   ```bash
   npm run dev
   ```

4. **Test the API for Blog Slugs:**

   Visit http://localhost:3000/api/blog-slugs to check if the API returns the list of blog slugs.

5. **Test the API for Blog Post Data:**

Visit http://localhost:3000/api/blog/seo-optimization to check if the API returns the blog post data for the specific slug.

6. **Test the Blog Post Page:**

Visit http://localhost:3000/blog/seo-optimization to see if the blog post is rendered properly with the SEO meta tags.
