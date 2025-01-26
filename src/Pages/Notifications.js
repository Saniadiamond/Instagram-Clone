import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Notifications.css';

const Notifications = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const notifications = [
    {
      id: 1,
      type: 'follow_request',
      username: 'jamina',
      avatar: '/img/first.jpg',
      time: '1h',
      message: 'requested to follow you'
    },
    {
      id: 2,
      type: 'like',
      username: 'golo',
      avatar: '/img/second.jpg',
      time: '3h',
      message: 'liked your photo'
    },
    {
      id: 3,
      type: 'follow',
      username: 'mariabbb88',
      avatar: '/img/third.jpg',
      time: '5h',
      message: 'started following you'
    },
    {
      id: 4,
      type: 'mention',
      username: 'gulllyyyy10',
      avatar: '/img/fourth.png',
      time: '8h',
      message: 'mentioned you in a comment'
    },
    {
      id: 5,
      type: 'like',
      username: 'miss.wardaaa',
      avatar: '/img/fifth.jpg',
      time: '12h',
      message: 'liked your reel'
    }
  ];

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <button className="back-button" onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1>Notifications</h1>
      </div>

      <div className="notifications-section">
        <div className="section-header">
          <h2>This Week</h2>
        </div>

        <div className="notifications-list">
          {notifications.map(notification => (
            <div key={notification.id} className="notification-item">
              <div className="notification-avatar">
                <img src={notification.avatar} alt={notification.username} />
              </div>
              <div className="notification-content">
                <div className="notification-text">
                  <span className="username">{notification.username}</span>
                  <span className="message">{notification.message}</span>
                </div>
                <span className="time">{notification.time}</span>
              </div>
              {notification.type === 'follow_request' && (
                <div className="notification-actions">
                  <button className="confirm-button">Confirm</button>
                  <button className="delete-button">Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
