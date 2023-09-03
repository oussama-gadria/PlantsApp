import axios from "axios";
import { createContext, useReducer } from "react";
export const BestRatingPlantContext = createContext([]);
export const BestRatingPlantDisptachContext = createContext(null);

 export const plantsReducer = (type, action) => {
    if (action.funct === "saveRatedPlants") {
      return fetchBestRate(action.type);
    }
  };
  const fetchBestRate = async (type) => {
    const resp = await axios.get(
      `http://localhost:5000/plant/filterByCategory/${type}`
    );
    if (resp) {
      const filtredPlant = resp.filter((plant) => plant.Rate > 10);
      return filtredPlant;
    }
  };
export const BestRatedPlantsProvider = ({ children }) => {
 
     const [plants, dispatch] = useReducer(plantsReducer, []);
  

  return (
    <BestRatingPlantContext.Provider value={plants}>
      <BestRatingPlantDisptachContext.Provider value={dispatch}>
        {children}
      </BestRatingPlantDisptachContext.Provider>
    </BestRatingPlantContext.Provider>
  );
};
