import React from "react";
import styles from "./blog.module.scss"
import Link from "next/link";
import Image from "next/image";

const BlogList = ({blog}) => {
  return (
    
      <div className={styles.blogList}>
        {blog?.blog?.map((item, i) => (
          <div key={i}>
            {console.log("item", item)}
            <Link href={`/blog/${item.pageUrl}`} key={i}>
              <Image src={item.images[0]} height={400} width={400} />
              {item.heading}
            </Link>
          </div>
        ))}
      </div>
  );
};

export default BlogList;
