import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
  faShare,
  faVolumeHigh,
  faVolumeMute,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons';
import './Reels.css';

const Reels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Sample reels data
  const reels = [
    {
      id: 1,
      username: 'ipsminnat',
      videoUrl: './videos/reel1.mp4',
      likes: '24.5K',
      comments: '465',
      description: 'Attitude کے گھر پے عید منانے جا رہی ہوں 😏😎🔥',
      music: 'Original audio',
      userImage: './img/profile.jpg',
      isFollowing: false
    },
    // Add more reels here
  ];

  const handleVideoEnd = () => {
    if (currentReel < reels.length - 1) {
      setCurrentReel(currentReel + 1);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleLike = () => {
    // Implement like functionality
  };

  const handleComment = () => {
    // Implement comment functionality
  };

  const handleShare = () => {
    // Implement share functionality
  };

  const handleSave = () => {
    // Implement save functionality
  };

  return (
    <div className="reels-container">
      <div className="reels-content">
        {reels.map((reel, index) => (
          <div 
            key={reel.id} 
            className={`reel ${currentReel === index ? 'active' : ''}`}
          >
            <video
              src={reel.videoUrl}
              loop
              autoPlay={currentReel === index}
              muted={isMuted}
              onEnded={handleVideoEnd}
              playsInline
            />
            
            <div className="reel-overlay">
              <div className="reel-header">
                <button className="sound-button" onClick={toggleMute}>
                  <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeHigh} />
                </button>
              </div>

              <div className="reel-sidebar">
                <button className="action-button" onClick={handleLike}>
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{reel.likes}</span>
                </button>
                <button className="action-button" onClick={handleComment}>
                  <FontAwesomeIcon icon={faComment} />
                  <span>{reel.comments}</span>
                </button>
                <button className="action-button" onClick={handleShare}>
                  <FontAwesomeIcon icon={faShare} />
                </button>
                <button className="action-button" onClick={handleSave}>
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
                <button className="action-button">
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </div>

              <div className="reel-footer">
                <div className="user-info">
                  <img src={reel.userImage} alt={reel.username} />
                  <span className="username">{reel.username}</span>
                  {!reel.isFollowing && (
                    <button className="follow-button">Follow</button>
                  )}
                </div>
                <p className="reel-description">{reel.description}</p>
                <div className="reel-music">
                  <span>♪ {reel.music}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
