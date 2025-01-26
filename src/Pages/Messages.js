import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Messages.css';

const Messages = () => {
  const [activeTab, setActiveTab] = useState('primary');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const chats = [
    {
      id: 1,
      username: 'jamina',
      avatar: '/img/first.jpg',
      lastMessage: 'Thanks for sharing!',
      time: '1h',
      isOnline: true
    },
    {
      id: 2,
      username: 'golo',
      avatar: '/img/second.jpg',
      lastMessage: 'Great post!',
      time: '3h',
      isOnline: true
    },
    {
      id: 3,
      username: 'mariabbb88',
      avatar: '/img/third.jpg',
      lastMessage: 'See you tomorrow!',
      time: '5h',
      isOnline: false
    },
    {
      id: 4,
      username: 'gulllyyyy10',
      avatar: '/img/fourth.png',
      lastMessage: 'How are you?',
      time: '1d',
      isOnline: false
    },
    {
      id: 5,
      username: 'miss.wardaaa',
      avatar: '/img/fifth.jpg',
      lastMessage: 'Nice to meet you!',
      time: '2d',
      isOnline: true
    }
  ];

  return (
    <div className="messages-container">
      <div className="messages-sidebar">
        <div className="messages-header">
          <button className="back-button" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2>sania_ch0009</h2>
          <button className="new-message-button">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>

        <div className="messages-tabs">
          <button
            className={`tab-button ${activeTab === 'primary' ? 'active' : ''}`}
            onClick={() => setActiveTab('primary')}
          >
            PRIMARY
          </button>
          <button
            className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            GENERAL
          </button>
        </div>

        <div className="chats-list">
          {chats.map(chat => (
            <div key={chat.id} className="chat-item">
              <div className="chat-avatar">
                <img src={chat.avatar} alt={chat.username} />
                {chat.isOnline && <span className="online-indicator"></span>}
              </div>
              <div className="chat-content">
                <div className="chat-header">
                  <span className="chat-username">{chat.username}</span>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <p className="chat-message">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="messages-main">
        <div className="empty-state">
          <div className="empty-state-content">
            <div className="messages-icon">
              <img src="/img/messages-icon.png" alt="Messages" />
            </div>
            <h3>Your Messages</h3>
            <p>Send private photos and messages to a friend or group</p>
            <button className="send-message-button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
