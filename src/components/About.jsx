import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/images/about.jpg"
            alt="FitZone Gym"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold text-gray-800 uppercase">About FitZone</h2>
          <p className="mt-4 text-lg text-gray-600">
            FitZone Gym is a premium fitness center dedicated to helping you 
            achieve your health and fitness goals. Whether you're a beginner 
            or an athlete, we offer state-of-the-art equipment, experienced 
            trainers, and a supportive community.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Join us today and start your journey to a healthier and stronger 
            version of yourself.
          </p>
          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold text-white transition-all">
            Learn More
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default About;
