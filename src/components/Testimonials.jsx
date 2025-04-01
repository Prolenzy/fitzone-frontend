import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css"; // Import CSS file

const testimonials = [
  {
    id: 1,
    name: "Kevin Mwangi",
    review:
      "FitZone Gym has transformed my life! The trainers are fantastic, and the equipment is top-notch. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Aisha Hassan",
    review:
      "I love the group classes! They keep me motivated and help me stay consistent. Great atmosphere!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Brian Otieno",
    review:
      "The personal training sessions are excellent. My coach customized a plan that fits my fitness goals perfectly!",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <motion.div
        className="testimonials-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>What Our Clients Say</h2>
        <p className="testimonials-description">
          Real stories from our satisfied members.
        </p>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: testimonial.id * 0.2 }}
            >
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <p className="testimonial-text">"{testimonial.review}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
