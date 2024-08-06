import React, { useContext } from "react";
import "./App.css";
import { AppContext } from "./components/AppContext/AppContext";

export const App: React.FC = () => {
  const { data } = useContext(AppContext);

  const images = data.map(({ image, name, id }) => (
    <img key={id} src={image} alt={name} />
  ));

  return <div className="App">{images}</div>;
};
