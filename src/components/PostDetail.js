import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostDetail({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://backend-bpeh3y9qy-semihmertdevs-projects.vercel.app/api/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">By: {post.author.username}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose" />
    </div>
  );
}

export default PostDetail;
