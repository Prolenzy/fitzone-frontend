import React from "react";
import { FaDumbbell, FaHeartbeat, FaRunning, FaUserShield } from "react-icons/fa";
import "./Services.css"; // Import the CSS file

const services = [
  {
    id: 1,
    title: "Personal Training",
    description: "Get one-on-one guidance from experienced fitness trainers.",
    icon: <FaUserShield className="service-icon" />,
  },
  {
    id: 2,
    title: "Strength Training",
    description: "Build muscle and improve endurance with our advanced equipment.",
    icon: <FaDumbbell className="service-icon" />,
  },
  {
    id: 3,
    title: "Cardio Workouts",
    description: "Enhance your heart health with our specialized cardio programs.",
    icon: <FaHeartbeat className="service-icon" />,
  },
  {
    id: 4,
    title: "Group Classes",
    description: "Join energetic group classes for motivation and fun workouts.",
    icon: <FaRunning className="service-icon" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="services-description">
          We offer a variety of fitness programs to help you achieve your health goals.
        </p>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
