import { getData } from '@/service/fetchData';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Blog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetchApi);
  useEffect(() => {
    dispatch(getData(`allBlog?page=1&limit=4`));
  }, []);
  console.log("data", data.
    blog)
  return <div className="container">{data?.blog?.map((item) => <Link href={`/blog/${item.pageUrl}`}>{item.pageUrl}</Link>)}</div>;
};

export default Blog;
