import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import "./styles.css";
import { FaBullhorn, FaPenNib, FaSearch, FaChartBar, FaRegArrowAltCircleRight, FaComments, FaCode } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { CgBrowser } from "react-icons/cg";


const Home = () => {

  const features = [
    { title: "Search Engine Optimization", icon: <FaSearch />, color: "#00C4B4", description: "Boost your website’s ranking and visibility on search engines with expert SEO strategies that drive organic traffic and enhance your online presence." },
    { title: "Social Media Optimization", icon: <GrOptimize />, color: "#3BB273", description: "Optimize your social media profiles and content to maximize engagement, increase brand awareness, and create a strong digital footprint." },
    { title: "Social Media Marketing", icon: <FaBullhorn />, color: "#E63946", description: "Boost your brand’s presence and engagement with targeted social media campaigns that drive real results." },
    { title: "Content Marketing", icon: <FaPenNib />, color: "#FFB400", description: "Create compelling content that attracts, engages, and converts your audience into loyal customers." },
    { title: "Whatsapp & Email Marketing", icon: <FaComments />, color: "#2979FF", description: "Leverage personalized WhatsApp and email campaigns to directly connect with your audience, improve engagement, and drive higher conversions." },
    { title: "Social Media Analysis", icon: <FaChartBar />, color: "#BA68C8", description: "Gain valuable insights into your social media performance with in-depth analysis and data-driven strategies to optimize engagement and growth." },
    { title: "Web Development", icon: <CgBrowser />, color: "#FF6F61", description: "Create stunning, high-performance websites tailored to your business needs. From responsive designs to seamless functionality, we build web solutions that drive success." },
    { title: "App Development", icon: <FaCode />, color: "#00A8E8", description: "Transform your ideas into powerful mobile applications with user-friendly designs and cutting-edge technology, ensuring seamless performance on all devices." }
];



  const events = [
    {
      title: "Pre-Wedding",
      image: "/img/pre-wed-front.jpg",
    },
    {
      title: "Wedding",
      image: "/img/portfolioCollection/wed3.jpg",
    },
    {
      title: "Maternity",
      image: "/img/portfolioCollection/mat1.jpg",
    },
    {
      title: "All Types",
      image: "/img/allType.jpg",
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/services", { state: { tab: "Digital Marketing" } });
  };


  return (
    <div className="home">
        <div className="landing-page">
          <div className="overlay"></div>
          <div className="overlay"></div>
          <div className="hero-section">
            
            <div className="text-container">
              <h1 className="explore-text">DORA PRODUCTIONS</h1>
              <div className="v-line"> </div>
              <h1 className="reflection-text">DORA PRODUCTIONS</h1>
            </div>
            <div className="right-section">
              <h1>Photography & <br/> Digital Marketing</h1> 
              <span>Capture moments, create impressions—where photography meets digital marketing to tell unforgettable stories. Elevate your brand with stunning visuals and strategic online presence.</span>
              <NavLink to="/services" exact activeClassName="active"> <button className="book-now-btn">  Book Now <FaRegArrowAltCircleRight className="arrow-icon" /> </button> </NavLink>
            </div>
          </div>

          
        </div>

        <div className="event-container-parent">
          <div className="event-container">
            <div className="event-container-heading">
              <h2 className="event-section-title">Our Photography Offers...</h2>
              <NavLink className="view-work-navlinka" to="/portfolio" exact activeClassName="active"> <button className="view-work-btn">  View All Works </button> </NavLink>
            </div>
            <div className="event-grid">
              {events.map((event, index) => (
                <div key={index} className="event-item">
                  <img src={event.image} alt={event.title} className="event-image" />
                  <div className="event-caption">{event.title}</div>
                </div>
              ))}
            </div>
            <NavLink className="view-work-navlinkb" to="/portfolio" exact activeClassName="active"> <button className="view-work-btn">  View All Works </button> </NavLink>
          </div>
        </div>

      <div className="marketing-section">
          <div className="overlay"></div>
          <section className="features-section">
            <h3 className="marketing-section-title">Our Efforts, Your Growth</h3>
            <div className="features-grid">
                {features.map((feature, index) => (
                  <NavLink to="/services" state={{ tab: "Digital Marketing" }} exact activeClassName="active">
                    <div className="feature-card" key={index}>
                        <div className="feature-icon" style={{ borderColor: feature.color, color: feature.color }}>
                            {feature.icon}
                        </div>
                        <div className="feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                  </NavLink>
                ))}
            </div>
          </section>
      </div>
      
    </div>
  );
};

export default Home;
