import "../style/styles.css";
import Photo from "/assets/images/foto-profil.png";
import imageRight from "/assets/images/image-right.png";
import imageLeft from "/assets/images/image-left.png";
export default function Header() {
  return (
    <header className="container">
      <h1 className="text__name">Mohamad Arif</h1>
      <h1 className="text__subname">Muharam</h1>
      <img src={imageLeft} alt="" className="image-left" />
      <img src={Photo} alt="Foto Arif" className="photo" />
      <img src={imageRight} alt="" className="image-right" />
      <h1 className="text__role">Front-End</h1>
      <h1 className="text__subrole">Programmer</h1>
    </header>
  );
}
