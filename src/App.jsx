import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Header />
      <Main />
    </>
  </StrictMode>
);
