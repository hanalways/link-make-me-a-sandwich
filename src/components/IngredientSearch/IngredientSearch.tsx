import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import { IngredientDisplay } from "../IngredientDisplay/IngredientDisplay";

const SearchStyles: React.CSSProperties = {
  fontSize: "1.5rem",
  padding: "1rem",
  width: "50%",
};

export const IngredientSearch = () => {
  const { data } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [matchingImages, setMatchingImages] = useState([]);

  useEffect(() => {
    const lowercased = searchTerm.toLowerCase();

    if (searchTerm.length === 0) {
      setMatchingImages([]);
      return;
    }

    setMatchingImages(
      data
        .filter(({ name }) => name.includes(lowercased))
        .map(({ image, name, id }) => (
          <IngredientDisplay id={id} image={image} name={name} />
        ))
    );
  }, [data, searchTerm]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for ingredients"
          style={SearchStyles}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <div style={{ marginTop: "1rem" }}>{matchingImages}</div>
    </>
  );
};
