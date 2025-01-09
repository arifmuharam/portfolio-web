import { useState } from "react";
import "../style/styles.css";
import Logo from "../assets/images/menit-logo.svg";

export default function Card() {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleCardContent = () => {
    setIsActive(!isActive);
  };

  const handleMouseUp = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`card ${isClicked ? "clicked" : ""}`}
      onClick={toggleCardContent}
      onMouseUp={handleMouseUp}
    >
      <img
        src="https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt="Gambar Proyek"
        className={`card__photo ${isClicked ? "clicked" : ""}`}
      />
      <div className={`card__content ${isActive ? "active" : ""}`}>
        <img src={Logo} alt="Logo aplikasi" className="card__logo" />
        <p className="card__text">Card Title</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </div>
  );
}
