import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTableCells, faBookmark, faUserTag } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const profileData = {
    username: 'sania_ch0009',
    name: 'Sania',
    avatar: './img/profile.jpg',
    posts: 0,
    followers: 17,
    following: 338,
    bio: [
      '🎓 Computer Science Graduate',
      '🏛 University of Agriculture Faisalabad',
      '💻 React Developer',
      '🚀 Passionate about coding & development'
    ]
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="profile-header-content">
          <div className="profile-avatar">
            <img src={profileData.avatar} alt={profileData.username} />
          </div>
          
          <div className="profile-info">
            <div className="profile-actions">
              <h2>{profileData.username}</h2>
              <button className="edit-profile-btn">Edit profile</button>
              <button className="view-archive-btn">View archive</button>
              <button className="settings-btn">
                <FontAwesomeIcon icon={faGear} />
              </button>
            </div>

            <div className="profile-stats">
              <span><strong>{profileData.posts}</strong> posts</span>
              <span><strong>{profileData.followers}</strong> followers</span>
              <span><strong>{profileData.following}</strong> following</span>
            </div>

            <div className="profile-bio">
              <h1>{profileData.name}</h1>
              {profileData.bio.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="profile-highlight-section">
        <div className="highlight-item new">
          <div className="highlight-add">
            <span>+</span>
          </div>
          <span>New</span>
        </div>
      </div>

      <div className="profile-content">
        <nav className="profile-nav">
          <button className="active">
            <FontAwesomeIcon icon={faTableCells} /> POSTS
          </button>
          <button>
            <FontAwesomeIcon icon={faBookmark} /> SAVED
          </button>
          <button>
            <FontAwesomeIcon icon={faUserTag} /> TAGGED
          </button>
        </nav>

        <div className="profile-grid">
          {/* If no posts */}
          <div className="no-posts">
            <div className="camera-icon">
              <svg aria-label="No Posts Yet" className="_ab6-" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="44" role="img" viewBox="0 0 44 44" width="44">
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </div>
            <h2>No Posts Yet</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
