import React from "react";
import styles from "./blogDetails.module.scss";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { truncateText } from "@/utils/constants";
const BlogDetailPageSection = ({ blog, bloglist }) => {
  console.log("blog", blog);
  return (
    <>
      <div className="container">
        <div className={styles.heroImageContainer}>
          <h1 className={styles.BlogHeading}>{blog.blog.heading}</h1>
          <Image
            src={blog.blog?.images?.url || "/destination-img/kuala-lumpur.webp"}
            className={styles.BlogDetails_Image}
            alt="kuala-lumpur"
            width={800}
            height={400}
            priority
          />
        </div>
        <div className={styles.BlogDetails_recentblog}>
          <h5>Recent Blogs</h5>
          {bloglist.blog.map((blg) => (
            <div key={blg._id} className={styles.recent_blog_list}>
              <Link href={`/blog/${blg.pageUrl}`}>
                <div style={{ display: "flex" }}>
                  <Image
                    src={
                      blg?.images?.url || "/destination-img/kuala-lumpur.webp"
                    }
                    width={85}
                    height={70}
                    alt={"Image"}
                    style={{
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                    priority
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <p>{dayjs(blg.createdAt).format("MMM D, YYYY")}</p>
                    <p>{truncateText(blg.heading, 65)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div className={styles.BlogDetails}>
            <p className={styles.smallDescription}>
              {blog.blog.smallDescription}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: blog.blog.content }}
              className={styles.BlogDetailsDescr}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPageSection;
