import { useEffect, useState } from "react";
import AddToCart from "../components/buttons/AddToCart";
import axios from "axios";
import BackButton from "../components/buttons/BackButton";
import { useParams } from "react-router-dom";
import QuantityButton from "../components/buttons/QuantityButton";

const PlantDetails = () => {
  const { plantName } = useParams();
  const [plant, setPlant] = useState({});
  useEffect(() => {
    const getPlantDetails = async () => {
      console.log("here");
      const response = await axios.get(
        `http://localhost:5000/plant/getPlantByName/${plantName}`
      );
      setPlant(response.data);
    };
    getPlantDetails();
  }, [plantName]);
  return (
    <div>
      <div className="md:h-screen bg-veryLightGray  dark:bg-veryDarkBlue">
        <div className="container mx-auto pt-8 ">
        <BackButton goTo="/shop" />
          <div className="flex pt-8 mx-10 ">
            <div
              href="#"
              className="bg-white rounded-lg   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-veryDarkBlue"
            >
              <div className="flex flex-wrap lg:flex-nowrap bg-veryLightGray dark:bg-veryDarkBlue ">
                <img
                  className="w-full lg:pr-10 lg:w-[700px] lg:h-[380px]"
                  src={plant.Image}
                  alt="plant"
                />
                <div className="  flex flex-col md:ml-[50px] ">
                  <h5 className="my-8 md:pl-10 text-2xl font-bold tracking-tight text-gray-900 ">
                    {plant.Name}
                  </h5>
                  <div className="flex flex-col md:flex-row md:pl-10 ">
                    <div>
                      <p className="mb-3 font-bold text-md text-gray-700 dark:text-gray-400 ">
                        ${plant.Price}
                      </p>
                      <p className="mb-3 font-bold text-md text-gray-700 dark:text-gray-400 ">
                        {plant.Description}
                      </p>
                      <div className="flex flex-col">
                        <p className="mb-3 transparent text-md text-gray-700 dark:text-gray-400 ">
                          size :
                        </p>
                        <div className="flex flex-row">
                          <button>
                            <div className="border border-green  w-7 text-center">
                              S
                            </div>
                          </button>
                          <button>
                            <div className="border border-green w-7 ml-2 text-center">
                              M
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-row mt-4">
                        <AddToCart />
                        <QuantityButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlantDetails;
