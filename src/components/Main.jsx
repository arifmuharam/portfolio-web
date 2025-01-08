import React from "react";
import "../style/styles.css";
import Card from "./Card";

export default function Main() {
  return (
    <main className="main">
      <h2 className="main__title">Projects</h2>
      <div className="card__container">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
