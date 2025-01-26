import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slides from './Slides';
import Post from '../components/Post';
import './Home.css';

function Home() {
  const posts = [
    {
      id: 1,
      username: 'Ayeza_khan',
      userImage: './img/ayeza.jpeg',
      postImage: './img/Ayeza.bb.jpeg',
      caption: '✨ Shine bright like a diamond ✨',
      isVerified: true
    },
    {
      id: 2,
      username: 'Sara_Khan',
      userImage: './img/ssra.jpeg',
      postImage: './img/sara.jpeg',
      caption: '',
      isVerified: true
    },
    // Add more posts as needed
  ];

  return (
    <div className="instagram-layout">
      <Header />
      
      <main className="main-content">
        <div className="feed-container">
          <Slides />
          {posts.map(post => (
            <Post
              key={post.id}
              username={post.username}
              userImage={post.userImage}
              postImage={post.postImage}
              caption={post.caption}
              isVerified={post.isVerified}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
