import React from "react";
import styles from "./blog.module.scss";
import Card from "../card/Card";
import dayjs from "dayjs";
import { truncateText } from "@/utils/constants";

const BlogList = ({ blog }) => {
  return (
    <div className={styles.blogList}>
      {blog?.map((item, i) => (
        <Card
          key={i}
          url={`/blog/${item.pageUrl}`}
          img={item.images?.url || "/blog-generic.webp"}
          heading={truncateText(item.heading, 60)}
          content={truncateText(item.smallDescription, 157)}
          createDate={dayjs(item.createdAt).format("MMM D, YYYY")}
        />
      ))}
    </div>
  );
};

export default BlogList;
