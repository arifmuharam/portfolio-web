import "../style/styles.css";
import Card from "./Card";
import data from "../utils/data";

export default function Main() {
  return (
    <main className="main">
      <h2 className="main__title">Projects</h2>
      <div className="card__container">
        {data.map((card) => (
          <Card key={card.id} title={card.title} logo={card.imageUrl} />
        ))}
      </div>
    </main>
  );
}
