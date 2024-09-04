// src/pages/PostPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import CommentSection from '../components/CommentSection';

function PostPage() {
  const { id } = useParams();

  return (
    <div>
      <PostDetail postId={id} />
      <CommentSection postId={id} />
    </div>
  );
}

export default PostPage;