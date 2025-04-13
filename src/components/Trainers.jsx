import React from "react";
import "./Trainers.css";

// Trainer data with real images
const trainers = [
  {
    id: 1,
    name: "Mark Luren",
    expertise: "Strength & Conditioning",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg", // Strength training
  },
  {
    id: 2,
    name: "Jane Smith",
    expertise: "Yoga & Mindfulness",
    image: "https://images.pexels.com/photos/3822355/pexels-photo-3822355.jpeg", // Yoga trainer
  },
  {
    id: 3,
    name: "Mark Wilson",
    expertise: "Cardio & Endurance",
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg", // Running/cardio
  },
];

const Trainers = () => {
  return (
    <section className="trainers">
      <h2>Meet Our Trainers</h2>
      <div className="trainers-list">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <p>{trainer.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
