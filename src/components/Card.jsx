import { useState } from "react";
import "../style/styles.css";
import Label from "./Label";
import Button from "./Button";

export default function Card({
  imageProject,
  imageLogo,
  title,
  label,
  description,
  button,
}) {
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
      {/* <picture>
        <source srcSet={imageProjectMobile} media="(max-width: 768px)" />
        <img src={imageProject} alt="Gambar responsif" />
      </picture> */}
      <img
        src={imageProject}
        alt="Gambar Proyek"
        className={`card__photo ${isClicked ? "clicked" : ""}`}
      />
      <div className={`card__content ${isActive ? "active" : ""}`}>
        <div className="card__title">
          <img src={imageLogo} alt="Logo aplikasi" className="card__logo" />
          <p className="card__text">{title}</p>
        </div>
        <div className="label__container">
          {label.map((tech) => (
            <Label key={tech.id} text={tech.name} className={tech.className} />
          ))}
        </div>
        <p className="card__description">{description}</p>
        <div className="button__container">
          {button.map((content) => (
            <Button key={content.id} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
}
