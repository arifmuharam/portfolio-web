import "../style/styles.css";

export default function Button({ text, link, color }) {
  return (
    <a
      className={`button ${color}`}
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="button__text">{text}</span>
    </a>
  );
}
