import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
