import React from "react";

const ContainerStyle: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid black",
  padding: "1rem",
};

export const IngredientDisplay = ({
  image,
  name,
  id,
}: {
  image: string;
  name: string;
  id: number;
}) => (
  <span style={ContainerStyle}>
    <img key={id} src={image} alt={name} />
    <h4>{name}</h4>
  </span>
);
