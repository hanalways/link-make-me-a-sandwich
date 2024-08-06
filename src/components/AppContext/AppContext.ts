import React, { createContext } from "react";

interface CompendiumAssets {
  category: "materials" | "monsters";
  common_locations: string[];
  cooking_effect: string;
  description: string;
  dlc: boolean;
  drops?: string[];
  hearts_recovered: number;
  id: number;
  image: string;
  name: string;
}

interface AppContextShape {
  data?: CompendiumAssets[];
}

export const AppContext: React.Context<AppContextShape> = createContext({});
