import Card from "@/components/card/Card";
import Carousel from "@/components/carousel";
import { getBlog } from "@/service/apicalling";
import { truncateText } from "@/utils/constants";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import styles from "./HomeBlog.module.scss";

const HomeBlog = async () => {
  const blog = await getBlog(1, 6);

  return (
    <div>
      {blog.blog.length > 0 && (
        <>
          <div
            className="flexcontainer"
            style={{
              margin: "40px 0 20px 0",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            <h2>Latest Blog</h2>
            <Link href={"/blog"}>View All</Link>
          </div>
          <div className={styles.blogList}>
            {blog.blog.map((item, i) => (
              <Card
                key={item.pageUrl}
                url={`/blog/${item.pageUrl}`}
                img={item.images?.url || "/blog-generic.webp"}
                heading={truncateText(item.heading, 60)}
                content={truncateText(item.smallDescription, 110)}
                createDate={dayjs(item.createdAt).format("MMM D, YYYY")}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeBlog;
