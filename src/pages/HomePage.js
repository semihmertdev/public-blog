import React from 'react';
import PostList from '../components/PostList';

function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Blog</h1>
      <PostList />
    </div>
  );
}

export default HomePage;
