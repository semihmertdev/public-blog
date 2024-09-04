// src/components/CommentSection.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/comments/post/${postId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleEditorChange = (content) => {
    setNewComment(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert('You must be logged in to comment.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/comments', {
        content: newComment,
        postId: postId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setComments([...comments, response.data]);
      setNewComment('');  // Yorum eklendikten sonra TinyMCE içeriğini temizlemek için
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="comment">
            <p dangerouslySetInnerHTML={{ __html: comment.content }} />
            <small>By: {comment.user?.username || 'Unknown User'}</small>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="comment-form">
        <Editor
          apiKey={process.env.REACT_APP_TINYMCE_API_KEY}  // .env dosyasından API anahtarını al
          value={newComment}
          init={{
            height: 200,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | bold italic backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={handleEditorChange}
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
