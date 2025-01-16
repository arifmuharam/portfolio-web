import "../style/styles.css";
import Card from "./Card";
import data from "../utils/data";

export default function Main() {
  return (
    <main className="main">
      <h2 className="main__title">Projects</h2>
      <div className="card__container">
        {data.map((project) => (
          <Card
            key={project.id}
            imageProject={project.imageProject}
            imageLogo={project.imageLogo}
            title={project.title}
            label={project.label}
            description={project.description}
            button={project.button}
          />
        ))}
      </div>
    </main>
  );
}
