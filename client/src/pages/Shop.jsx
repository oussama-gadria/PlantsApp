import { useCallback, useEffect, useState } from "react";
import PlantCard from "../components/cards/PlantCard";
import axios from "axios";
import FilterByCategory from "../components/filter/FilterByCategory";
import FilterByPrice from "../components/filter/FilterByPrice";
import FilterByType from "../components/filter/FilterByType";
import SortBy from "../components/filter/SortBy";
import BackButton from "../components/buttons/BackButton";
import FardWard from "../assets/svg/Farward";
import BackWard from "../assets/svg/BackWard";
import SearchForm from "../components/common/SearchForm";

const Shop = () => {
  const [plantsList, setPlantList] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();
  const [minPriceFilter, setMinPriceFilter] = useState();
  const [maxPriceFilter, setMaxPriceFilter] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState();
  const itemsPerPage = 8;
  const [plantsToShow, setPlantsToShow] = useState([]);
  const totalPages = Math.floor(plantsList.length / itemsPerPage) ;
  const calculatePagination = () => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const newPlantsToShow = plantsList.slice(firstIndex, lastIndex);
    setPlantsToShow(newPlantsToShow);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
    calculatePagination();
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
    calculatePagination();
  };

  const fetchPlants = async () => {
    await axios
      .get("http://localhost:5000/plant/getPlants")
      .then((response) => {
        setPlantList(response.data);
        setPlantsToShow(response.data.slice(1, 9));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPlants();
  }, []);

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
      setPlantsToShow(plantsFilterByPrice);
    }

    //! minPriceFilter && !maxPriceFilter && categoryFilter && !typeFilter
    else if (
      minPriceFilter &&
      !maxPriceFilter &&
      categoryFilter &&
      !typeFilter
    ) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const plantsFilterByPrice = await plantsFiltreByCategory.data.filter(
        (plant) => {
          return plant.Price >= minPriceFilter;
        }
      );
      setPlantsToShow(plantsFilterByPrice);
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
      setPlantsToShow(plantsFilterByPrice);
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
      setPlantsToShow(planstFilterByType);
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
      setPlantsToShow(plantsFilterByPrice);
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
      setPlantsToShow(plantsFilterByPrice);
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
      setPlantsToShow(plantsFiltreByCategory.data);
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
      setPlantsToShow(plantsFilterByPrice);
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
      setPlantsToShow(plantsFilterByPrice);
    }
    //! minPriceFilter && maxPriceFilter && categoryFilter && typeFilter
    else if (minPriceFilter && maxPriceFilter && categoryFilter && typeFilter) {
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
      setPlantsToShow(planstFilterByType);
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
      setPlantsToShow(planstFilterByType);
    }
    //! minPriceFilter && maxPriceFilter && categoryFilter && !typeFilter
    else if (
      minPriceFilter &&
      maxPriceFilter &&
      categoryFilter &&
      !typeFilter
    ) {
      const plantsFiltreByCategory = await axios.get(
        `http://localhost:5000/plant/filterByCategory/${categoryFilter}`
      );
      const plantsFilterByPrice = await plantsFiltreByCategory.data.filter(
        (plant) => {
          return plant.Price >= minPriceFilter && plant.Price <= maxPriceFilter;
        }
      );
      setPlantsToShow(plantsFilterByPrice);
    }
    //! minPriceFilter && maxPriceFilter && !categoryFilter && !typeFilter
    else if (
      minPriceFilter &&
      maxPriceFilter &&
      !categoryFilter &&
      !typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const plantsFilterByPrice = await plants.data.filter((plant) => {
        return plant.Price >= minPriceFilter && plant.Price <= maxPriceFilter;
      });
      setPlantsToShow(plantsFilterByPrice);
    }
    //! minPriceFilter && !maxPriceFilter && !categoryFilter && !typeFilter
    else if (
      minPriceFilter &&
      !maxPriceFilter &&
      !categoryFilter &&
      !typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const plantsFilterByPrice = await plants.data.filter((plant) => {
        return plant.Price >= minPriceFilter;
      });
      setPlantsToShow(plantsFilterByPrice);
    }
    //! maxPriceFilter && !minPriceFilter && !categoryFilter && !typeFilter
    else if (
      maxPriceFilter &&
      !minPriceFilter &&
      !categoryFilter &&
      !typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      const plantsFilterByPrice = await plants.data.filter((plant) => {
        return plant.Price <= maxPriceFilter;
      });
      setPlantsToShow(plantsFilterByPrice);
    }
    //! !maxPriceFilter && !minPriceFilter && !categoryFilter && !typeFilter
    else if (
      !maxPriceFilter &&
      !minPriceFilter &&
      !categoryFilter &&
      !typeFilter
    ) {
      const plants = await axios.get("http://localhost:5000/plant/getPlants");
      setPlantsToShow(plants.data);
    }
  }, [
    minPriceFilter,
    maxPriceFilter,
    categoryFilter,
    setPlantsToShow,
    typeFilter,
  ]);

  useEffect(() => {
    filterPlants();
  }, [categoryFilter, filterPlants, typeFilter]);
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
        <SearchForm/> 
        <div className="flex flex-row justify-between mt-6">
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
        <div>
          <div className="grid grid-cols-4 mt-11">
            {plantsToShow.map((plant) => (
              <PlantCard plant={plant} />
            ))}
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="bg-gray hover:shadow-xl text-green  font-bold py-2 px-4 rounded-full "
            >
              <BackWard/>
            </button>
            <span className="px-6">Page {currentPage}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className=" bg-gray hover:shadow-xl  text-green font-bold py-2 px-4 rounded-full"
            >
              <FardWard/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
