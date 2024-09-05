import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://backend-api-ze9x.onrender.com/api/comments/post/${postId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert('You must be logged in to comment.');
      return;
    }

    try {
      const response = await axios.post('https://backend-api-ze9x.onrender.com/api/comments', {
        content: newComment,
        postId: postId
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments.map(comment => (
          <li key={comment.id} className="border-b pb-2">
            <p>{comment.content}</p>
            <small className="text-gray-500">By: {comment.user?.username || 'Unknown User'}</small>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          className="w-full p-2 border rounded-md mb-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Post Comment
        </button>
      </form>
    </div>
  );
}

export default CommentSection;
