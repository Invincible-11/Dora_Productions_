import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import axios from "axios"; // Uncomment if you're using axios for API requests
import "./styles.css";

const web3FromsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const photographyServices = [
  { title: "Birthday", image: "/img/birthday2.png" },
  { title: "Pre-Wedding", image: "/img/portfolioCollection/pre6.jpg" },
  { title: "Wedding", image: "/img/portfolioCollection/wed3.jpg" },
  { title: "Maternity", image: "/img/portfolioCollection/mat1.jpg" },
  { title: "Portraits", image: "/img/portraits.jpg" },
  { title: "Occasional", image: "/img/occasional.jpg" },
];

const digitalMarketingServices = [
  { title: "Search Engine Optimization", image: "/img/seo.jpg" },
  { title: "Social Media Optimization", image: "/img/smo.png" },
  { title: "Social Media Marketing", image: "/img/smm.jpg" },
  { title: "Content Marketing", image: "/img/content.jpg" },
  { title: "Whatsapp & Email Marketing", image: "/img/wp.jpg" },
  { title: "Social Media Analysis", image: "/img/sma.jpg" },
  { title: "Web Developement", image: "/img/webDev.jpg"},
  { title: "App Developement", image: "/img/appDev.webp"},
];

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Photography");

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location]);

  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    serviceType: "Photography",
    serviceSubtype: "",
  });

  const handleBookNow = (service) => {
    setSelectedService(service);
    setFormData({ ...formData, serviceSubtype: service, serviceType: activeTab });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formPayload = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      service: selectedService,
    };

    // Using Web3Forms API to send email
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: "DORA - New Service Booking Application",
        access_key: web3FromsAccessKey, 
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: `Booking request for: ${selectedService} in ${activeTab}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Booking confirmed! We will get back to you soon...");
        setShowForm(false);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          serviceType: "Photography",
          serviceSubtype: "",
        });
      })
      .catch((error) => {
        alert("Error in booking. Please try again.");
      });
  };

  return (
    <section className="booking-section">
      <h2>Our Services</h2>
      <div className="tabs">
        <button className={activeTab === "Photography" ? "active" : ""} onClick={() => setActiveTab("Photography")}>
          Photography
        </button>
        <button className={activeTab === "Digital Marketing" ? "active" : ""} onClick={() => setActiveTab("Digital Marketing")}>
          Digital Marketing
        </button>
      </div>

      <div className="services-list">
        {(activeTab === "Photography" ? photographyServices : digitalMarketingServices).map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>CONTACT US</p>
              <button onClick={() => handleBookNow(service.title)}>BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="popup-form">
            <h3>Book {selectedService} Service</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="mobile" placeholder="Mobile No." value={formData.mobile} onChange={handleChange} required />
              <button type="submit">Confirm Booking</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
