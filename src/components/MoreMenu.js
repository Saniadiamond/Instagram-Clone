import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faBookmark,
  faClock,
  faMoon,
  faCircleExclamation,
  faArrowRightFromBracket,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MoreMenu.css';

const MoreMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { icon: faCog, text: 'Settings', path: '/settings' },
    { icon: faClock, text: 'Your activity', path: '/activity' },
    { icon: faBookmark, text: 'Saved', path: '/saved' },
    { icon: faMoon, text: 'Switch appearance', path: '/appearance' },
    { icon: faCircleExclamation, text: 'Report a problem', path: '/report' },
    { icon: faUserGroup, text: 'Switch accounts', path: '/switch-accounts' },
  ];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="more-menu-overlay" onClick={handleOverlayClick}>
      <div className="more-menu">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="more-menu-item"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.text}</span>
          </Link>
        ))}
        <div className="menu-divider"></div>
        <button className="more-menu-item logout-button">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default MoreMenu;
