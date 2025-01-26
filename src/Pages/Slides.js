import React, { useState, useRef, useEffect } from "react";
import "./Slides.css";

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const progressInterval = useRef(null);
  
  const stories = [
    {
      id: 1,
      username: "natphotogr...",
      image: "./img/hania.jpeg",
      profilePic: "./img/hania.jpeg",
      timestamp: "3h"
    },
    {
      id: 2,
      username: "_laizarhad...",
      image: "./img/sajal.jpeg",
      profilePic: "./img/sajal.jpeg",
      timestamp: "5h"
    },
    {
      id: 3,
      username: "adeelmurr...",
      image: "./img/ayeza.jpeg",
      profilePic: "./img/ayeza.jpeg",
      timestamp: "7h"
    },
    {
      id: 4,
      username: "ayrakawai...",
      image: "./img/ayeza.jpeg",
      profilePic: "./img/ayeza.jpeg",
      timestamp: "9h"
    },
    {
      id: 5,
      username: "sarahkhan...",
      image: "./img/sajal.jpeg",
      profilePic: "./img/sajal.jpeg",
      timestamp: "11h"
    },
    {
      id: 6,
      username: "_golden_l...",
      image: "./img/hania.jpeg",
      profilePic: "./img/hania.jpeg",
      timestamp: "13h"
    },
    {
      id: 7,
      username: "merium.pe...",
      image: "./img/ayeza.jpeg",
      profilePic: "./img/ayeza.jpeg",
      timestamp: "15h"
    },
    {
      id: 8,
      username: "laibakhan...",
      image: "./img/sajal.jpeg",
      profilePic: "./img/sajal.jpeg",
      timestamp: "17h"
    }
  ];

  useEffect(() => {
    if (isViewerOpen) {
      startProgress();
    } else {
      clearInterval(progressInterval.current);
      setProgress(0);
    }
    return () => clearInterval(progressInterval.current);
  }, [isViewerOpen, currentSlide]);

  const startProgress = () => {
    setProgress(0);
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total duration
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide === stories.length - 1) {
      setIsViewerOpen(false);
      setCurrentSlide(0);
    } else {
      setCurrentSlide(prev => prev + 1);
      setProgress(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setIsViewerOpen(false);
    } else {
      setCurrentSlide(prev => prev - 1);
      setProgress(0);
    }
  };

  const openStory = (index) => {
    setCurrentSlide(index);
    setIsViewerOpen(true);
    setProgress(0);
  };

  const handleKeyDown = (e) => {
    if (isViewerOpen) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setIsViewerOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isViewerOpen]);

  return (
    <>
      <div className="stories-slider">
        <div className="stories-container" ref={containerRef}>
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`story-item ${index === currentSlide && isViewerOpen ? "active" : ""}`}
              onClick={() => openStory(index)}
            >
              <div className="story-ring">
                <img src={story.profilePic} alt={story.username} className="story-img" />
              </div>
              <span className="story-username">{story.username}</span>
            </div>
          ))}
        </div>

        <button className="slider-nav prev" onClick={() => scroll('left')}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-nav next" onClick={() => scroll('right')}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {isViewerOpen && (
        <div className="story-viewer">
          <div className="story-viewer-header">
            <div className="progress-container">
              {stories.map((_, index) => (
                <div key={index} className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${index === currentSlide ? progress : index < currentSlide ? 100 : 0}%`
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="viewer-user-info">
              <img 
                src={stories[currentSlide].profilePic} 
                alt={stories[currentSlide].username} 
                className="viewer-profile-pic"
              />
              <span className="viewer-username">{stories[currentSlide].username}</span>
              <span className="viewer-timestamp">{stories[currentSlide].timestamp}</span>
            </div>
            <button className="close-viewer" onClick={() => setIsViewerOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="story-viewer-content">
            <img 
              src={stories[currentSlide].image} 
              alt={stories[currentSlide].username} 
              className="story-viewer-image"
            />
            <button className="viewer-nav prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="viewer-nav next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Slides;
