import React, { useEffect } from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaXTwitter } from "react-icons/fa6";
import "./styles.css";

const About = () => {

  useEffect(() => {
    document.body.classList.add("about-page");
    
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  return (
    <div className="parallax-container">
      <h1>About Us</h1>
      
      <div className="container">
        <h2>Our Digital Marketing Objectives</h2>
        <div className="objectives-grid">
          <div className="objective"><ul><span>Increase Brand Awareness:</span> Establish a strong online presence and reach a global audience through digital platforms.</ul></div>
          <div className="objective"><span>Generate Leads & Conversions:</span> Attract potential customers through targeted campaigns and convert visitors into leads and paying customers.</div>
          <div className="objective"><span>Enhance Customer Engagement:</span> Build relationships through social media, email marketing, and personalized content to improve customer retention and loyalty.</div>
          <div className="objective"><span>Improve Social Media & Web Traffic:</span> Optimize SEO strategies to rank higher in search results and use PPC advertising, social media, and content marketing.</div>
          <div className="objective"><span>Cost-Effective Marketing:</span> Reach a larger audience at a lower cost compared to traditional marketing while optimizing ROI through analytics and data tracking.</div>
          <div className="objective"><span>Measure & Analyze Performance:</span> Use data analytics to track campaign performance and adjust strategies based on real-time insights.</div>
        </div>
        <div className="content-container">      
            <img src="img/yo-color.png" alt="Man" className="man-image" />
            <div className="text-section">
                <div className="line"></div>
                <h2>
                Welcome to Dora Productions, where creativity meets innovation! We specialize in professional photography and digital marketing, helping you capture timeless moments and elevate your brand. <br/><br/>
                From stunning portraits and event photography to strategic social media campaigns and SEO-driven marketing, we bring your vision to life. <br/><br/>
                Our team is passionate about delivering high-quality visuals and impactful marketing solutions tailored to your needs. Let’s create something extraordinary together!
                </h2>
            </div>
            <div className="social-links">
              <p>FOLLOW OUR JOURNEY</p>
              <h3>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                      <FaYoutube className="social-icons fa-youtube" /> Youtube 
                      <span><FaArrowUpRightFromSquare /></span>
                  </a>
              </h3>
              <h3>
                  <a href="https://www.instagram.com/doraproductions?igsh=MWttbmlhZTNrNjV3bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="social-icons fa-instagram" /> Instagram 
                      <span><FaArrowUpRightFromSquare /></span>
                  </a>
              </h3>
              <h3>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className="social-icons fa-twitter" /> Twitter 
                      <span><FaArrowUpRightFromSquare /></span>
                  </a>
              </h3>
              <h3>
                  <a href="https://www.facebook.com/share/1EaRSkXoK7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="social-icons fa-facebook" /> Facebook 
                      <span><FaArrowUpRightFromSquare /></span>
                  </a>
              </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;