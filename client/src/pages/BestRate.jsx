import { useContext, useEffect, useState } from "react";
import BackWard from "../assets/svg/BackWard";
import BackButton from "../components/buttons/BackButton";
import PlantCard from "../components/cards/PlantCard";
import FardWard from "../assets/svg/Farward";
import { useParams } from "react-router-dom";
import { BestRatingPlantContext } from "../context/BestRatingContext";

const BestRating=()=>{ 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const type=useParams("categoryName");
    const plantsList=useContext(BestRatingPlantContext)
    useEffect(()=>{ 
       
    })
    const totalPages = Math.floor(plantsList.length / itemsPerPage) ;
    const [plantsToShow, setPlantsToShow] = useState([]);
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
    )
}
export default BestRating;