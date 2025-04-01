import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Image Section */}
        <div className="about-image">
          <img src="/images/about.jpg" alt="FitZone Gym" />
        </div>

        {/* Text Content */}
        <div className="about-text">
          <h2>About FitZone</h2>
          <p>
            FitZone Gym is a premium fitness center dedicated to helping you 
            achieve your health and fitness goals. Whether you're a beginner 
            or an athlete, we offer state-of-the-art equipment, experienced 
            trainers, and a supportive community.
          </p>
          <p>
            Join us today and start your journey to a healthier and stronger 
            version of yourself.
          </p>
          <button className="about-button">Learn More</button>
        </div>
        
      </div>
    </section>
  );
};

export default About;
