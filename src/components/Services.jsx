import React from "react";
import { FaDumbbell, FaHeartbeat, FaRunning, FaUserShield } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Personal Training",
    description: "Get one-on-one guidance from experienced fitness trainers.",
    icon: <FaUserShield className="text-red-600 text-5xl" />,
  },
  {
    id: 2,
    title: "Strength Training",
    description: "Build muscle and improve endurance with our advanced equipment.",
    icon: <FaDumbbell className="text-red-600 text-5xl" />,
  },
  {
    id: 3,
    title: "Cardio Workouts",
    description: "Enhance your heart health with our specialized cardio programs.",
    icon: <FaHeartbeat className="text-red-600 text-5xl" />,
  },
  {
    id: 4,
    title: "Group Classes",
    description: "Join energetic group classes for motivation and fun workouts.",
    icon: <FaRunning className="text-red-600 text-5xl" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 uppercase">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a variety of fitness programs to help you achieve your health goals.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
