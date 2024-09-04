// src/pages/HomePage.js

import React from 'react';
import PostList from '../components/PostList';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our Blog</h1>
      <PostList />
    </div>
  );
}

export default HomePage;