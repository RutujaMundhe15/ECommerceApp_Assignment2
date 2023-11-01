// src/components/Comments.js
import React, { useState } from 'react';

const Comments = ({ comments, addComment }) => {
  const [comment, setComment] = useState({ text: '', rating: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const submitComment = () => {
    // Implement the logic to add a comment and rating (e.g., make an API call)
    addComment(comment);
  };

  return (
    <div>
      <h1>Comments</h1>
      <div>
        <input
          type="text"
          name="text"
          value={comment.text}
          onChange={handleInputChange}
          placeholder="Add a comment"
        />
        <input
          type="number"
          name="rating"
          value={comment.rating}
          onChange={handleInputChange}
          placeholder="Rating"
        />
        <button onClick={submitComment}>Submit</button>
      </div>
      {/* Display existing comments and ratings */}
    </div>
  );
};

export default Comments;
