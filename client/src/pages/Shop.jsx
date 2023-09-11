import { useCallback, useEffect, useState } from "react";
import PlantCard from "../components/cards/PlantCard";
import axios from "axios";
import FilterByCategory from "../components/filter/FilterByCategory";
import FilterByPrice from "../components/filter/FilterByPrice";
import FilterByType from "../components/filter/FilterByType";
import BackButton from "../components/buttons/BackButton";
import FardWard from "../assets/svg/Farward";
import BackWard from "../assets/svg/BackWard";
import SearchForm from "../components/common/SearchForm";

const Shop = () => {
  const [plantsList, setPlantList] = useState([]);
  const [plantsToShow, setPlantsToShow] = useState([]);
  const [plants, setPlants] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [minPriceFilter, setMinPriceFilter] = useState(null);
  const [maxPriceFilter, setMaxPriceFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState(null);
  const itemsPerPage = 8;
  const calculatePagination = useCallback(() => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const newPlantsToShow = plantsList.slice(firstIndex, lastIndex);
    setPlantsToShow(newPlantsToShow);
    setPlants(newPlantsToShow);
  }, [currentPage, plantsList]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
    calculatePagination();
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
    calculatePagination();
  };

  const fetchPlants = useCallback(async () => {
    const response = await axios.post("http://localhost:5000/plant/filter", {
      type: typeFilter ? typeFilter : null,
      maxPrice: maxPriceFilter ? maxPriceFilter : null,
      minPrice: minPriceFilter ? minPriceFilter : null,
      category: categoryFilter ? categoryFilter : null,
    });
    setPlantList(response.data);
    setTotalPages(Math.ceil(response.data.length / itemsPerPage));
  }, [typeFilter, maxPriceFilter, minPriceFilter, categoryFilter]);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  useEffect(() => {
    calculatePagination();
  }, [calculatePagination]);

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
        <SearchForm
          plantsToShow={plantsToShow}
          setPlantsToShow={setPlantsToShow}
          setPlants={setPlants}
        />
        <div className="flex flex-row justify-between mt-6">
          <div>
            <FilterByCategory setCategoryFilter={setCategoryFilter} />
            <FilterByPrice
              setMaxPriceFilter={setMaxPriceFilter}
              setMinPriceFilter={setMinPriceFilter}
            />
            <FilterByType setTypeFilter={setTypeFilter} />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 mt-11">
            {plants.map((plant) => (
              <PlantCard plant={plant} />
            ))}
          </div>
          <div className="flex flex-row justify-center items-center pb-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="bg-gray hover:shadow-xl text-green  font-bold py-2 px-4 rounded-full "
            >
              <BackWard />
            </button>
            <span className="px-6">Page {currentPage}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className=" bg-gray hover:shadow-xl  text-green font-bold py-2 px-4 rounded-full"
            >
              <FardWard />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
