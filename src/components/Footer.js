import React, { useState } from 'react';
import SwitchAccounts from './SwitchAccounts';
import './Footer.css';

const Footer = () => {
  const [isSwitchModalOpen, setIsSwitchModalOpen] = useState(false);

  const suggestions = [
    {
      id: 1,
      username: 'jamina',
      followedBy: 'the-honey66',
      moreInfo: '3 more',
      avatar: '/img/first.jpg'
    },
    {
      id: 2,
      username: 'golo',
      followedBy: 'hobdii',
      moreInfo: '2 more',
      avatar: '/img/second.jpg'
    },
    {
      id: 3,
      username: 'mariabbb88',
      followedBy: 'hbndjj__',
      avatar: '/img/third.jpg'
    },
    {
      id: 4,
      username: 'gulllyyyy10',
      followedBy: 'girl_with_attitude3',
      avatar: '/img/fourth.png'
    },
    {
      id: 5,
      username: 'miss.wardaaa',
      followedBy: 'khadija_sajid_awan',
      avatar: '/img/fifth.jpg'
    }
  ];

  const footerLinks = [
    'About',
    'Help',
    'Press',
    'API',
    'Jobs',
    'Privacy',
    'Terms',
    'Locations',
    'Language',
    'Meta Verified'
  ];

  return (
    <>
      <div className="footer-container">
        {/* Current User Section */}
        <div className="current-user">
          <img src="/img/profile.jpg" alt="sania_ch0009" />
          <div className="user-info">
            <h4>sania_ch0009</h4>
            <p>Sania</p>
          </div>
          <button 
            className="switch-button"
            onClick={() => setIsSwitchModalOpen(true)}
          >
            Switch
          </button>
        </div>

        {/* Suggestions Section */}
        <div className="suggestions-section">
          <div className="suggestions-header">
            <h3>Suggested for you</h3>
            <a href="#" className="see-all">See All</a>
          </div>

          {suggestions.map(suggestion => (
            <div key={suggestion.id} className="suggestion-item">
              <div className="suggestion-left">
                <img src={suggestion.avatar} alt={suggestion.username} />
                <div className="suggestion-info">
                  <h4>{suggestion.username}</h4>
                  <p>Followed by {suggestion.followedBy} {suggestion.moreInfo && `+ ${suggestion.moreInfo}`}</p>
                </div>
              </div>
              <button className="follow-button">Follow</button>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <nav>
            {footerLinks.map((link, index) => (
              <React.Fragment key={link}>
                <a href="#">{link}</a>
                {index < footerLinks.length - 1 && <span>·</span>}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="copyright">
          2025 INSTAGRAM FROM META
        </div>
      </div>

      <SwitchAccounts 
        isOpen={isSwitchModalOpen}
        onClose={() => setIsSwitchModalOpen(false)}
      />
    </>
  );
};

export default Footer;
