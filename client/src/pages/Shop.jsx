import { useCallback, useEffect, useState } from "react";
import PlantCard from "../components/cards/PlantCard";
import axios from "axios";
import FilterByCategory from "../components/filter/FilterByCategory";
import FilterByPrice from "../components/filter/FilterByPrice";
import FilterByType from "../components/filter/FilterByType";
import SortBy from "../components/filter/SortBy";
import BackButton from "../components/buttons/BackButton";

const Shop = () => {
  const [plantsList, setPlantList] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();
  const [minPriceFilter, setMinPriceFilter] = useState();
  const [maxPriceFilter, setMaxPriceFilter] = useState();
  const [typeFilter, setTypeFilter] = useState();

  const fetchPlants = async () => {
    await axios
      .get("http://localhost:5000/plant/getPlants")
      .then((response) => setPlantList(response.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const filterPlants = useCallback(async () => {
    //! !minPriceFilter && maxPriceFilter && categoryFilter && !typeFilter
    if (!minPriceFilter && maxPriceFilter && categoryFilter && !typeFilter) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const plantsFilterByPrice = await plantsFiltreByCategory.data.filter(
        (plant) => {
          return plant.Price <= maxPriceFilter;
        }
      );
      setPlantList(plantsFilterByPrice);
    }

    //! minPriceFilter && !maxPriceFilter && categoryFilter && !typeFilter
    else if (minPriceFilter && !maxPriceFilter && categoryFilter && !typeFilter) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const plantsFilterByPrice = await plantsFiltreByCategory.data.filter(
        (plant) => {
          return plant.Price >= minPriceFilter;
        }
      );
      setPlantList(plantsFilterByPrice);
    }

    //! !minPriceFilter && maxPriceFilter && !categoryFilter && typeFilter
    else if (
      !minPriceFilter &&
      maxPriceFilter &&
      !categoryFilter &&
      typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const planstFilterByType = plants.data.filter((plant) => {
        return plant.Type === typeFilter;
      });
      const plantsFilterByPrice = await planstFilterByType.filter((plant) => {
        return plant.Price <= maxPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
    //!  !minPriceFilter && !maxPriceFilter && categoryFilter &&   typeFilter  
    else if (
      !minPriceFilter &&
      !maxPriceFilter &&
      categoryFilter &&
      typeFilter
    ) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const planstFilterByType = plantsFiltreByCategory.data.filter((plant) => {
        return plant.Type === typeFilter;
      });
      setPlantList(planstFilterByType);
    } 
    //!  !minPriceFilter && maxPriceFilter &&  categoryFilter &&  typeFilter
    else if (
      !minPriceFilter &&
      maxPriceFilter &&
      categoryFilter &&
      typeFilter
    ) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const planstFilterByType = plantsFiltreByCategory.data.filter((plant) => {
        return plant.Type === typeFilter;
      });
      const plantsFilterByPrice = await planstFilterByType.filter((plant) => {
        return plant.Price <= maxPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
    //!   minPriceFilter && !maxPriceFilter && categoryFilter && typeFilter
    else if (
      minPriceFilter &&
      !maxPriceFilter &&
      categoryFilter &&
      typeFilter
    ) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const planstFilterByType = plantsFiltreByCategory.data.filter((plant) => {
        return plant.Type === typeFilter;
      });
      const plantsFilterByPrice = await planstFilterByType.filter((plant) => {
        return plant.Price >= minPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
    //!  !minPriceFilter && !maxPriceFilter &&  categoryFilter && !typeFilter
    else if (
      !minPriceFilter &&
      !maxPriceFilter &&
      categoryFilter &&
      !typeFilter
    ) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      setPlantList(plantsFiltreByCategory.data);
    } 
    //!   minPriceFilter && maxPriceFilter && !categoryFilter && typeFilter
    else if (
      minPriceFilter &&
      maxPriceFilter &&
      !categoryFilter &&
      typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const planstFilterByType = plants.data.filter((plant) => {
        return plant.Type === typeFilter;
      });
      const plantsFilterByPrice = await planstFilterByType.filter((plant) => {
        return plant.Price >= minPriceFilter && plant.Price <= maxPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
    //!   minPriceFilter && !maxPriceFilter && !categoryFilter && typeFilter
    else if (
      minPriceFilter &&
      !maxPriceFilter &&
      !categoryFilter &&
      typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const planstFilterByType = plants.data.filter((plant) => {
        return plant.Type === typeFilter;
      });
      const plantsFilterByPrice = await planstFilterByType.filter((plant) => {
        return plant.Price >= minPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
    //! minPriceFilter && maxPriceFilter && categoryFilter && typeFilter
    else if (
      minPriceFilter &&
      maxPriceFilter &&
      categoryFilter &&
      typeFilter
    ) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const plantsFilterByPrice = await plantsFiltreByCategory.data.filter(
        (plant) => {
          return plant.Price >= minPriceFilter;
        }
      );
      const planstFilterByType = await plantsFilterByPrice.filter((plant) => {
        return plant.Type === typeFilter;
      });
      setPlantList(planstFilterByType);
    } 
    //!   !minPriceFilter &&!maxPriceFilter && !categoryFilter &&  typeFilter
    else if (
      !minPriceFilter &&
      !maxPriceFilter &&
      !categoryFilter &&
      typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const planstFilterByType = plants.data.filter((plant) => {
        return plant.Type === typeFilter;
      });
      setPlantList(planstFilterByType);
    } 
    //! minPriceFilter && maxPriceFilter && categoryFilter && !typeFilter
    else if (minPriceFilter && maxPriceFilter && categoryFilter && !typeFilter) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const plantsFilterByPrice = await plantsFiltreByCategory.data.filter(
        (plant) => {
          return plant.Price >= minPriceFilter && plant.Price <= maxPriceFilter;
        }
      );
      setPlantList(plantsFilterByPrice);
    } 
    //! minPriceFilter && maxPriceFilter && !categoryFilter && !typeFilter
    else if (minPriceFilter && maxPriceFilter && !categoryFilter && !typeFilter) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const plantsFilterByPrice = await plants.data.filter((plant) => {
        return plant.Price >= minPriceFilter && plant.Price <= maxPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
    //! minPriceFilter && !maxPriceFilter && !categoryFilter && !typeFilter
    else if (minPriceFilter && !maxPriceFilter && !categoryFilter && !typeFilter) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const plantsFilterByPrice = await plants.data.filter((plant) => {
        return plant.Price >= minPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
    //! maxPriceFilter && !minPriceFilter && !categoryFilter && !typeFilter
    else if (maxPriceFilter && !minPriceFilter && !categoryFilter && !typeFilter) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const plantsFilterByPrice = await plants.data.filter((plant) => {
        return plant.Price <= maxPriceFilter;
      });
      setPlantList(plantsFilterByPrice);
    } 
     //! !maxPriceFilter && !minPriceFilter && !categoryFilter && !typeFilter
    else if (!maxPriceFilter && !minPriceFilter && !categoryFilter && !typeFilter) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      setPlantList(plants.data);
    } 
  }, [
    minPriceFilter,
    maxPriceFilter,
    categoryFilter,
    setPlantList,
    typeFilter,
  ]);

  useEffect(() => {
    filterPlants();
  }, [categoryFilter, filterPlants, typeFilter]);

  useEffect(() => {
    fetchPlants();
  }, []);
  return (
    <>
      <div className=" bg-gray h-[184px] flex items-center">
        <div className="container  flex flex-row mx-auto items-center ">
          <div className="font-bold text-green ml-4 text-[60px]">Shop | </div>
          <div className="font-bold text-black ml-4 text-[16px] mt-12">
            Find the perfect plant for your space
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-11">
        <BackButton goTo="/" />
        <div className="flex flex-row justify-between mt-11">
          <div>
            <FilterByCategory setCategoryFilter={setCategoryFilter} />
            <FilterByPrice
              setMaxPriceFilter={setMaxPriceFilter}
              setMinPriceFilter={setMinPriceFilter}
            />
            <FilterByType setTypeFilter={setTypeFilter} />
          </div>
          <SortBy />
        </div>
        <div className="grid grid-cols-4 mt-11">
          {plantsList.map((plant) => (
            <PlantCard plant={plant} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Shop;
