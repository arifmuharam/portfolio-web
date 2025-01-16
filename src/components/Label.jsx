import "../style/styles.css";

export default function Label({ text, className }) {
  return <span className={`label ${className}`}>{text}</span>;
}
