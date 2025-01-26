import React from 'react';
import './Explore.css';

const Explore = () => {
  const exploreItems = [
    {
      id: 1,
      type: 'image',
      src: '/img/first.jpg',
      likes: '1.2k',
      comments: '234'
    },
    {
      id: 2,
      type: 'video',
      src: '/img/second.jpg',
      views: '15.6k'
    },
    {
      id: 3,
      type: 'image',
      src: '/img/third.jpg',
      likes: '3.4k',
      comments: '156'
    },
    {
      id: 4,
      type: 'image',
      src: '/img/fourth.png',
      likes: '892',
      comments: '45'
    },
    {
      id: 5,
      type: 'video',
      src: '/img/fifth.jpg',
      views: '8.9k'
    },
    {
      id: 6,
      type: 'image',
      src: '/img/first.jpg',
      likes: '2.1k',
      comments: '178'
    },
    {
      id: 7,
      type: 'video',
      src: '/img/second.jpg',
      views: '12.3k'
    },
    {
      id: 8,
      type: 'image',
      src: '/img/third.jpg',
      likes: '4.5k',
      comments: '289'
    },
    {
      id: 9,
      type: 'image',
      src: '/img/fourth.png',
      likes: '1.7k',
      comments: '123'
    }
  ];

  return (
    <div className="explore-container">
      <div className="explore-grid">
        {exploreItems.map((item) => (
          <div key={item.id} className="explore-item">
            <img src={item.src} alt={`Explore item ${item.id}`} />
            <div className="explore-item-overlay">
              <div className="overlay-stats">
                {item.type === 'video' ? (
                  <div className="stat">
                    <i className="fas fa-play"></i>
                    <span>{item.views}</span>
                  </div>
                ) : (
                  <>
                    <div className="stat">
                      <i className="fas fa-heart"></i>
                      <span>{item.likes}</span>
                    </div>
                    <div className="stat">
                      <i className="fas fa-comment"></i>
                      <span>{item.comments}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
