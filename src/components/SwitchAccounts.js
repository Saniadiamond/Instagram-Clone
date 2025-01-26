import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import './SwitchAccounts.css';

const SwitchAccounts = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Close modal when clicking overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const currentAccount = {
    username: 'sania_ch0009',
    avatar: '/img/profile.jpg'
  };

  return (
    <div className="switch-accounts-overlay" onClick={handleOverlayClick}>
      <div className="switch-accounts-modal">
        <div className="switch-header">
          <h2>Switch accounts</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="accounts-list">
          {/* Current Account */}
          <div className="account-item current">
            <div className="account-info">
              <img src={currentAccount.avatar} alt={currentAccount.username} />
              <span className="username">{currentAccount.username}</span>
            </div>
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </div>

          {/* Login Button */}
          <div className="login-section">
            <button className="login-button">
              Log into an Existing Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchAccounts;
