import React, { useState, useEffect } from "react";
import "./styles.css";

const categories = ["Pre-Wedding", "Wedding", "Maternity", "All-Types"];

const images = {
  "Pre-Wedding": ["wed13.jpg", "wed12.jpg", "wed5.jpg", "pre1.jpg", "wed10.jpg", "wed14.jpg", "wed15.jpg", "pre2.jpg", "pre3.jpg", "pre4.jpg", "pre5.jpg",],
  Wedding: ["wed1.jpg",  "wed3.jpg",  "wed18.jpg", "wed4.jpg", "wed8.jpg", "wed9.jpg", "wed17.jpg", "wed11.jpg", "wed2.jpg", "wed19.jpg", "wed20.jpg"],
  Maternity: ["mat2.jpg", "mat1.jpg", "mat9.jpg", "mat4.jpg", "mat5.jpg", "mat6.jpg","mat8.jpg", "mat7.jpg", "mat10.jpg", "mat12.jpg", "mat11.jpg", "mat13.jpg", "mat14.jpg"],
  "All-Types": [ "wed16.jpg", "a1.jpg","a2.jpg","a3.jpg","a4.jpg","a5.jpg",],
};

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
  </div>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Pre-Wedding");
  const [portraitImages, setPortraitImages] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  // Reset loading tracking when tab changes
  useEffect(() => {
    setImagesLoaded(0);
    setTotalImages(images[activeTab].length);
  }, [activeTab]);

  const handleImageLoad = (event, index) => {
    const img = event.target;
    setPortraitImages((prev) => ({
      ...prev,
      [index]: img.naturalHeight > img.naturalWidth, // True if portrait, False if landscape
    }));
    
    setImagesLoaded(prev => prev + 1);
  };

  const handleTabChange = (category) => {
    setIsLoading(true);
    setActiveTab(category);
  };

  // Once all images are loaded, hide the spinner
  useEffect(() => {
    if (imagesLoaded > 0 && imagesLoaded >= totalImages) {
      setIsLoading(false);
    }
  }, [imagesLoaded, totalImages]);

  return (
    <div className="gallery-container">
      <nav className="gallery-tabs">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => handleTabChange(category)} 
            className={activeTab === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </nav>

      {isLoading && <Spinner />}

      <div className={`gallery-grid ${activeTab.toLowerCase()} ${isLoading ? 'loading' : ''}`}>
        {images[activeTab].map((img, index) => (
          <div 
            key={`${activeTab}-${index}`} 
            className={`gallery-item ${portraitImages[index] ? "portrait" : ""}`}
          >
            <img 
              src={`/img/portfolioCollection/${img}`} 
              alt={`${activeTab} ${index + 1}`} 
              onLoad={(e) => handleImageLoad(e, index)}
              onError={() => setImagesLoaded(prev => prev + 1)} // Count error loads too
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;