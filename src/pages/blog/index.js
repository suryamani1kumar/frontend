import { getData } from "@/service/fetchData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetchApi);
  useEffect(() => {
    dispatch(getData(`allBlog?page=1&limit=4`));
  }, []);
  console.log("data", data.blog);
  return (
    <div className="container">
      {data?.blog?.map((item, i) => (
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

export default Blog;
