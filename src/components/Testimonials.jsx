import React from "react";
import { motion } from "framer-motion";

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
    <section id="testimonials" className="py-20 bg-gray-50 px-6 md:px-12">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 uppercase">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Real stories from our satisfied members.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: testimonial.id * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-red-600"
              />
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
              <h3 className="mt-4 font-semibold text-gray-800">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
