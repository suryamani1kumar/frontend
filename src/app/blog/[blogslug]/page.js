import { getBlogBySlug } from "@/service/apicalling";
import { notFound } from "next/navigation";
import styles from "@/components/Blog/blogDetails.module.scss";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { blogslug } = await params;

  const blog = await getBlogBySlug(blogslug);

  if (!blog.blog) {
    return {
      title: "Blog not found",
      description: "The requested blog could not be found",
    };
  }

  return {
    title: blog.blog.metaTitle || blog.blog.title,
    description: blog.blog.metaDescription,
    keywords: blog.blog.metaKeywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogslug}`,
    },
    openGraph: {
      type: "article",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blogslug}`,
      title: blog.blog.metaTitle || blog.blog.title,
      description: blog.blog.metaDescription,
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const { blogslug } = await params;

  const blog = await getBlogBySlug(blogslug);

  if (!blog.blog) {
    notFound();
  }

  return (
    <>
      <Image
        src="/destination-img/kuala-lumpur.webp"
        className={styles.BlogDetails_Image}
        alt="kuala-lumpur"
        width={0}
        height={0}
      />
      <div className="container">
        <h1 className={styles.BlogHeading}>{blog.blog.heading}</h1>
        <p className={styles.smallDescription}>{blog.blog.smallDescription}</p>
        <div
          dangerouslySetInnerHTML={{ __html: blog.blog.content }}
          className={styles.BlogDetails}
        />
      </div>
    </>
  );
}
