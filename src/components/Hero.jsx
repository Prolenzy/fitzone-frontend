import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen text-white"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/gym-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-wide">
          Transform Your <span className="text-red-500">Body</span>,  
          Elevate Your <span className="text-red-500">Strength</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Join FitZone Gym today and take the first step toward a stronger,  
          healthier you!
        </p>
        <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg uppercase tracking-wide">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
