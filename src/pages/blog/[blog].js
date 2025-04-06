import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const BlogDetails = () => {
  const router = useRouter();
  const { query, isReady } = router; // Ensure the query is ready before using it
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_HOSTNAME}/api/blog?pageurl=${query.blog}`,
        {
          headers: {
            'api-key': process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      setBlogData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load blog details');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!isReady || !query.blog) return; // Ensure query param exists and router is ready

    fetchData();
  }, [isReady, query.blog]); // Only fetch when router is ready and `pageurl` exists
  console.log('blogData', blogData);
  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {blogData && (
        <div dangerouslySetInnerHTML={{ __html: blogData.blog.content }} />
      )}
    </div>
  );
};

export default BlogDetails;
