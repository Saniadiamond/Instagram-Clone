import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import './CreatePost.css';

const CreatePost = ({ isOpen, onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    );
    setSelectedFiles(validFiles);
  };

  const handleFileInput = (e) => {
    const files = [...e.target.files];
    handleFiles(files);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="create-post-overlay" onClick={onClose}>
      <div className="create-post-modal" onClick={e => e.stopPropagation()}>
        <div className="create-post-header">
          <h2>Create new post</h2>
          <button className="close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        <div 
          className={`create-post-content ${dragActive ? 'drag-active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {selectedFiles.length === 0 ? (
            <div className="upload-area">
              <div className="upload-icon">
                <FontAwesomeIcon icon={faPhotoVideo} size="3x" />
              </div>
              <h3>Drag photos and videos here</h3>
              <button className="select-button" onClick={handleButtonClick}>
                Select from computer
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileInput}
                style={{ display: 'none' }}
              />
            </div>
          ) : (
            <div className="preview-area">
              {selectedFiles.map((file, index) => (
                <div key={index} className="file-preview">
                  {file.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
                  ) : (
                    <video src={URL.createObjectURL(file)} controls />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
