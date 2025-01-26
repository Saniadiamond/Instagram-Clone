import React, { useState } from 'react';
import './Post.css';

const Post = ({ username, userImage, postImage, caption, isVerified }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(1234);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-info">
          <img src={userImage} alt={username} className="post-user-img" />
          <div className="post-user-details">
            <div className="username-container">
              <span className="username">{username}</span>
              {isVerified && (
                <svg aria-label="Verified" className="verified-badge" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18">
                  <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path>
                </svg>
              )}
            </div>
            <span className="location">Location</span>
          </div>
        </div>
        <button className="more-options">•••</button>
      </div>

      <div className="post-image-container" onDoubleClick={handleLike}>
        <img src={postImage} alt="post" className="post-image" />
      </div>

      <div className="post-actions">
        <div className="left-actions">
          <button onClick={handleLike} className={`action-btn ${isLiked ? 'liked' : ''}`}>
            <i className={`fa${isLiked ? 's' : 'r'} fa-heart`}></i>
          </button>
          <button className="action-btn">
            <i className="far fa-comment"></i>
          </button>
          <button className="action-btn">
            <i className="far fa-paper-plane"></i>
          </button>
        </div>
        <button onClick={() => setIsSaved(!isSaved)} className="action-btn save-btn">
          <i className={`fa${isSaved ? 's' : 'r'} fa-bookmark`}></i>
        </button>
      </div>

      <div className="post-info">
        <span className="likes">{likes.toLocaleString()} likes</span>
        <div className="caption">
          <span className="username">{username}</span> {caption}
        </div>
        <span className="timestamp">17 HOURS AGO</span>
      </div>

      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
        <button className="post-btn">Post</button>
      </div>
    </div>
  );
};

export default Post;
