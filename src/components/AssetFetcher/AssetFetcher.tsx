import React, { useEffect, useState } from "react";
import { AppContext } from "../AppContext/AppContext";

interface Props {
  children: React.ReactNode;
}

export const AssetFetcher: React.FC<Props> = ({
  children,
}): React.ReactElement => {
  const [fetchComplete, setFetchComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all")
      .then((res) => res.json())
      .then((responseJson: { data }) => {
        const { data } = responseJson;
        setApiData(
          data?.filter(
            (result) =>
              result.category === "materials" || result.category === "monsters"
          ) ?? []
        );
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setFetchComplete(true);
      });
  }, []);

  if (!fetchComplete) {
    return <>Loading...</>;
  }

  if (isError) {
    // TODO: error states
  }

  return (
    <AppContext.Provider
      value={{
        data: apiData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
