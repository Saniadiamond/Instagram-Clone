import React from 'react';
import './Stories.css';

const Stories = () => {
  const stories = [
    { id: 1, username: 'natphotogr...', image: '/img/ayeza.jpeg' },
    { id: 2, username: '_laizarhad...', image: '/img/ayeza.jpeg' },
    { id: 3, username: 'adeelmurr...', image: '/img/ayeza.jpeg' },
    { id: 4, username: 'ayrakawai...', image: '/img/ayeza.jpeg' },
    { id: 5, username: 'sarahkhan...', image: '/img/ayeza.jpeg' },
    { id: 6, username: '_golden_l...', image: '/img/ayeza.jpeg' },
    { id: 7, username: 'merium.pe...', image: '/img/ayeza.jpeg' },
    { id: 8, username: 'laibakhan...', image: '/img/ayeza.jpeg' },
  ];

  return (
    <div className="stories-container">
      {stories.map((story) => (
        <div key={story.id} className="story-item">
          <div className="story-ring">
            <img src={story.image} alt={story.username} className="story-img" />
          </div>
          <span className="story-username">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
