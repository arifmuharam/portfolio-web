import "../style/styles.css";

export default function Button({ text, color }) {
  return (
    <button className={`button ${color}`}>
      <span className="button__text">{text}</span>
    </button>
  );
}
