import { getBlog, getBlogBySlug } from "@/service/apicalling";
import { notFound } from "next/navigation";
import styles from "@/components/Blog/blogDetails.module.scss";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { truncateText } from "@/utils/constants";
import BlogDetailPageSection from "@/components/Blog/BlogDetailPageSection";

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

  const bloglist = await getBlog(1, 8);

  return (
    // <>
    //   <Image
    //     src={blog.blog?.images?.url || "/destination-img/kuala-lumpur.webp"}
    //     className={styles.BlogDetails_Image}
    //     alt="kuala-lumpur"
    //     width={0}
    //     height={0}
    //   />
    //   <div className="container">
    //     <div style={{ display: "flex", gap: "20px" }}>
    //       <div className={styles.BlogDetails}>
    //         <h1 className={styles.BlogHeading}>{blog.blog.heading}</h1>
    //         <p className={styles.smallDescription}>
    //           {blog.blog.smallDescription}
    //         </p>
    //         <div
    //           dangerouslySetInnerHTML={{ __html: blog.blog.content }}
    //           className={styles.BlogDetailsDescr}
    //         />
    //       </div>
    //       <div className={styles.BlogDetails_recentblog}>
    //         <h5>Recent Blogs</h5>
    //         {bloglist.blog.map((blg) => (
    //           <div key={blg._id} className={styles.recent_blog_list}>
    //             <Link href={`/blog/${blg.pageUrl}`}>
    //               <div style={{ display: "flex" }}>
    //                 <Image
    //                   src={
    //                     blg?.images?.url || "/destination-img/kuala-lumpur.webp"
    //                   }
    //                   width={85}
    //                   height={70}
    //                   alt={"Image"}
    //                   style={{
    //                     borderTopLeftRadius: "10px",
    //                     borderBottomLeftRadius: "10px",
    //                   }}
    //                   priority
    //                 />
    //                 <div style={{ marginLeft: "10px" }}>
    //                   <p>{dayjs(blg.createdAt).format("MMM D, YYYY")}</p>
    //                   <p>{truncateText(blg.heading, 65)}</p>
    //                 </div>
    //               </div>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </>
    <BlogDetailPageSection blog={blog} bloglist={bloglist} />
  );
}
