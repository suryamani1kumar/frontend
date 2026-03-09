import React from "react";
import styles from "./blogDetails.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  FaCalendarDays,
  FaCircleInfo,
  FaFacebook,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Faq from "../Faq/Faq";

const RecentBlogSection = dynamic(
  () => import("./RecentBlog/RecentBlogSection"),
  {
    loading: () => <div style={{ height: 400 }} />,
  },
);
const BlogDetailPageSection = ({ blog, bloglist, formattedDate }) => {
  return (
    <div className="container">
      <div className={styles.heroImageContainer}>
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
      <div className={styles?.headingContainer}>
        <div className={styles.headingContainerLine}>
          <div className={styles.blofInfo}>
            <p className={styles.author}>
              By<span>{blog.blog.author?.name}</span>
              <FaCircleInfo />
            </p>
            <p className={styles.releaseDate}>
              {formattedDate}
              <FaCalendarDays />{" "}
            </p>
          </div>
          <div className={styles.socialMediaContainer}>
            <div className={styles.socialMediaIconsContainer}>
              <FaFacebook className={styles.socialMediaIcon} />
              <FaSquareInstagram className={styles.socialMediaIcon} />
              <FaXTwitter className={styles.socialMediaIcon} />
            </div>
            <div className={styles.mobileBlogInfo}>
              <p className={styles.authorMobile}>
                By<span>{blog.blog.author?.name}</span>
                <FaCircleInfo />
              </p>
              <p className={styles.releaseDateMobile}>
                {formattedDate}
                <FaCalendarDays />{" "}
              </p>
            </div>
          </div>
        </div>

        <h1 className={styles.BlogHeading}>{blog.blog.heading}</h1>
      </div>
      <div className={styles.BlogContentSection}>
        <div className={styles.BlogDetailsDescr}>
          <div dangerouslySetInnerHTML={{ __html: blog.blog.content }} />
          {blog.blog.faqs.length > 0 && <Faq faqs={blog.blog.faqs} />}
        </div>

        <div className={styles.otherBlogInfoSection}>
          <RecentBlogSection bloglist={bloglist} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPageSection;
