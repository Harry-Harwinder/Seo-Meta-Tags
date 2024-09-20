import Head from "next/head";

const BlogPost = ({ post }) => {
  if (!post) {
    return <p> Loading... </p>;
  }

  return (
    <>
      <Head>
        <title> {post.title} </title>{" "}
        <meta name="description" content={post.description} />{" "}
        <meta name="keywords" content="SEO, Next.js, React, Blog" />
        <meta property="og:title" content={post.title} />{" "}
        <meta property="og:description" content={post.description} />{" "}
        <meta property="og:type" content="article" />
      </Head>{" "}
      <div>
        <h1> {post.title} </h1> <p> {post.description} </p>{" "}
        <p> Written by: {post.author} </p>{" "}
        <p> Published on: {post.datePublished} </p>{" "}
      </div>{" "}
    </>
  );
};

// Fetching the blog post at build time
export async function getStaticProps({ params }) {
  console.log(`Fetching blog post for slug: ${params.slug}`);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${params.slug}`
    // `http://localhost:3000/api/blog/${params.slug}`
  );
  if (!response.ok) {
    console.error("Failed to fetch blog post:", response.statusText);
    return { props: { post: null } };
  }
  const post = await response.json();

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

export async function getStaticPaths() {
  try {
    console.log("Fetching blog slugs...");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog-slugs`
      // "http://localhost:3000/api/blog-slugs"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch slugs");
    }

    const slugs = await response.json();
    console.log("Fetched slugs:", slugs);

    const paths = slugs.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error("Error loading static paths:", error);
    return { paths: [], fallback: true }; // Return empty paths in case of error
  }
}

export default BlogPost;
