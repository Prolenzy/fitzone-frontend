import React from "react";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <div className="overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          Transform Your <span className="highlight">Body</span>,  
          Elevate Your <span className="highlight">Strength</span>
        </h1>
        <p>
          Join FitZone Gym today and take the first step toward a stronger,  
          healthier you!
        </p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
