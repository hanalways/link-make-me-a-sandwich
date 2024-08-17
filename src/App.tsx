import React from "react";
import "./App.css";
import { IngredientSearch } from "./components/IngredientSearch/IngredientSearch";

const PageStyles: React.CSSProperties = {
  margin: "0 auto",
  padding: "2rem",
};

export const App: React.FC = () => {
  return (
    <div className="App" style={PageStyles}>
      {<IngredientSearch />}
    </div>
  );
};
