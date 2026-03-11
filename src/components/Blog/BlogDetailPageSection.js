import React from "react";
import styles from "./blogDetails.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FiSearch } from "react-icons/fi";
import Faq from "../Faq/Faq";

const RecentBlogSection = dynamic(
  () => import("./RecentBlog/RecentBlogSection"),
  {
    loading: () => <div style={{ height: 400 }} />,
  },
);
const BlogDetailPageSection = ({ blog, bloglist, formattedDate }) => {
  return (
    <div>
      <div className={styles.heroImageContainer}>
        <div style={{ position: "absolute" }}>
          <h1 className={styles.BlogHeading}>{blog.blog.heading}</h1>
        </div>
        <div className={styles.headingContainerMobile}>
          <h1 className={styles.BlogHeadingMobile}>{blog.blog.heading}</h1>
        </div>
        <Image
          src={blog.blog?.images?.url || "/blog-generic.webp"}
          className={styles.BlogDetails_Image}
          alt={blog.blog.heading}
          width={1100}
          height={350}
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      <div className="container">
        <div className={styles.BlogContentSection}>
          <div className={styles.BlogDetailsDescr}>
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: blog.blog.content }}
                className={styles.DetailsDescr}
              />
              <div style={{ background: "#fff", padding: "15px 20px" }}>
                <h3 style={{fontSize:"24px"}}>Author</h3>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div style={{ flexShrink: "0", textAlign:"center"}}>
                    <Image
                      src={"/author-genric.png"}
                      width={100}
                      height={60}
                      alt=""
                    />
                    <h4>{blog.blog.author?.name}</h4>
                  </div>

                  <p>{blog.blog.author?.description}</p>
                </div>
              </div>
            </div>
            {blog.blog.faqs.length > 0 && <Faq faqs={blog.blog.faqs} />}
          </div>

          <div className={styles.otherBlogInfoSection}>
            <div className={styles.searchBox}>
              <input type="text" className={styles.input} placeholder="" />
              <FiSearch className={styles.icon} />
            </div>

            <RecentBlogSection bloglist={bloglist} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPageSection;
