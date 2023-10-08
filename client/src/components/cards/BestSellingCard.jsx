import { useNavigate } from "react-router-dom";
import ShopNowButton from "../buttons/ShopNowButton";

const BestSellingCard = () => {
    const navigate=useNavigate();
    const showBestRatePlants=(type)=>{ 
       navigate(`/bestRatedPlant/${type}`);
    }
  return (
    <>
      <div className="flex flex-row ">
        <div className="flex flex-col basis-1/3 items-center bg-white rounded overflow-hidden shadow-lg mr-4 mb-14 dark:bg-darkBlue dark:text-white dark:border-darkBlue">
          <div className="aspect-ratio-container   ">
            <img
              src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/e88d0ee4-3c13-4cbc-889f-acd7d3eca155-best-indoor-plants-shutterstock.jpg"
              alt="Country Flag"
            />
          </div>
          <div className="flex items-center  mt-11">
            <div className="text-black  font-extrabold text-lg mr-2">
              INDOOR PLANTS
            </div>
          </div>
          <div>
            <ShopNowButton showBestRatePlant={()=>showBestRatePlants("Indoor Plants")} type={"Indoor Plants"} />
          </div>
        </div>
        <div className="flex flex-col basis-1/3  items-center bg-white rounded overflow-hidden shadow-lg mx-4 mb-14 dark:bg-darkBlue dark:text-white dark:border-darkBlue">
          <div className="aspect-ratio-container ">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/air-purifying-plants-1588597694.jpg?crop=1.00xw:0.755xh;0,0.0769xh&resize=640:*"
              alt="Country Flag"
            />
          </div>
          <div className="flex items-center   mt-11">
            <div className="text-black  font-extrabold text-lg mr-2">
              SUN REQUIREMENTS
            </div>
          </div>
          <ShopNowButton showBestRatePlant={()=>showBestRatePlants("Indoor Plants")} type={"Indoor Plants"} />
        </div>

        <div className="flex flex-col basis-1/3  items-center bg-white rounded overflow-hidden shadow-lg ml-4 mb-14 dark:bg-darkBlue dark:text-white dark:border-darkBlue">
          <div className="aspect-ratio-container  ">
            <img
              src="https://www.allaboutgardening.com/wp-content/uploads/2022/01/Types-of-Flowers-in-Garden-1200x667.jpg"
              alt="Country Flag"
            />
          </div>
          <div className="flex items-center   mt-11">
            <div className="text-black  font-extrabold text-lg mr-2">
              OUTDOORS PLANTS
            </div>
          </div>
          <ShopNowButton showBestRatePlant={()=>showBestRatePlants("Outdoor plants")} type={"Outdoor plants"} />
        </div>
      </div>
    </>
  );
};
export default BestSellingCard;
