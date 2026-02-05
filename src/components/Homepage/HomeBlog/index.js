import Card from "@/components/card/Card";
import Carousel from "@/components/carousel";
import { getBlog } from "@/service/apicalling";
import { truncateText } from "@/utils/constants";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import styles from "./HomeBlog.module.scss";

const HomeBlog = async () => {
  const blog = await getBlog(1, 10);

  return (
    <div>
      <div className="flexcontainer">
        <h2 className={styles.Hm_Bl_heading}>Latest Blog</h2>
        <Link href={"/blog"}>View All</Link>
      </div>

      <Carousel>
        {blog.blog.map((item, i) => (
          <Card
            key={i}
            url={`/blog/${item.pageUrl}`}
            img={item.images?.url || "/destination-img/kuala-lumpur.webp"}
            heading={truncateText(item.heading, 60)}
            content={truncateText(item.smallDescription, 110)}
            createDate={dayjs(item.createdAt).format("MMM D, YYYY")}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBlog;
