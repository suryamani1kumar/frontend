import BlogList from "@/components/Blog/BlogList";
import { getData } from "@/service/fetchData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../components/Blog/blog.module.scss";
import { CiSearch } from "react-icons/ci";


const Blog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetchApi);
  useEffect(() => {
    dispatch(getData(`allBlog?page=1&limit=4`));
  }, []);
  console.log("data", data.blog);
  return (
    <div className="container">
      <div className={styles.blogMainConatiner}>
        <BlogList blog={data} />
        <div>
          <div>
            <input placeholder="Search" className={styles.BlogSearch}/>
            <CiSearch />

          </div>
          <div>
            <h5>Categories</h5>
          </div>
          <div>
            <h5>Most Read Blog</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
