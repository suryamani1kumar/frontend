import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./recentBlogSection.module.scss";
import { truncateText } from "@/utils/constants";

const RecentBlogSection = ({ bloglist }) => {
  return (
    <div className={styles.recentBlogSection}>
      <h2 className={styles.recentBlogHeading}>Recent Blogs</h2>
      <div className={styles.recentBlogs}>
        {bloglist?.blog?.map((blog) => (
          <Link
            href={`/blog/${blog.pageUrl}`}
            key={blog._id}
            className={styles.recentBlog}
          >
            <Image
              src={blog.images?.url || "/destination-img/kuala-lumpur.webp"}
              className={styles.recentBlogImg}
              alt={blog.heading}
              width={300}
              height={180}
              loading="lazy"
              sizes="(max-width:768px) 50vw, 300px"
            />
            <h3 className={styles.recentBlogTitle}>
              {truncateText(blog.heading, 60)}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogSection;
