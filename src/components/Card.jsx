import React, { useState } from "react";

export default function Card() {
  const [isActive, setIsActive] = useState(false);
  const toggleCardContent = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="card" onClick={toggleCardContent}>
      <img
        src="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt="Gambar Proyek"
      />
      <div className={`card__content ${isActive ? "active" : ""}`}>
        <p className="card__title">Card Title</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </div>
  );
}
