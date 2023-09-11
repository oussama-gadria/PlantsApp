import { useEffect, useState } from "react";
import AddToCart from "../components/buttons/AddToCart";
import axios from "axios";
import BackButton from "../components/buttons/BackButton";
import { useParams } from "react-router-dom";
import QuantityButton from "../components/buttons/QuantityButton";

const PlantDetails = () => {
  const { plantName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [plant, setPlant] = useState({});
  const cartId = localStorage.getItem("cartId");

  useEffect(() => {
    const getPlantDetails = async () => {
      const response = await axios.get(
        `http://localhost:5000/plant/getPlantByName/${plantName}`
      );
      setPlant(response.data);
    };
    getPlantDetails();
  }, [plantName]);

  const addToCart = async (plantId) => {
    try {
      await axios
        .post("http://localhost:5000/cart/addPlantToCart", {
          cartId,
          plantId,
          quantity,
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="md:h-screen bg-veryLightGray  dark:bg-veryDarkBlue">
        <div className="container mx-auto pt-8 ">
          <BackButton goTo="/shop" />
          <div className="flex pt-8 mx-7 ">
            <div
              href="#"
              className="bg-white rounded-lg   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-veryDarkBlue"
            >
              <div className="flex flex-wrap lg:flex-nowrap bg-veryLightGray dark:bg-veryDarkBlue ">
                <img
                  className="w-full rounded-lg lg:pr-10 lg:w-[900px] lg:h-[545px]"
                  src={plant.Image}
                  alt="plant"
                />
                <div className="  flex flex-col md:ml-[50px] ">
                  <h5 className="my-8 md:pl-10 text-5xl font-bold tracking-tight text-gray-900 ">
                    {plant.Name}
                  </h5>
                  <div className="flex flex-col md:flex-row md:pl-10 ">
                    <div>
                      <p className="mb-3 font-bold text-3xl text-gray-700 dark:text-gray-400 ">
                        ${plant.Price}
                      </p>
                      <p className="mb-3 font-bold text-xl text-gray-700 dark:text-gray-400 py-8 ">
                        {plant.Description}
                      </p>
                      <p className="mb-3 font-bold text-2xl text-gray-700 dark:text-gray-400 ">
                        Quantity : {plant.Quantity}
                      </p>
                      <div className="flex flex-col">
                        <p className="mb-3  font-bold  text-2xl text-gray-700 dark:text-gray-400 ">
                          size :
                        </p>
                        <div className="flex flex-row">
                          {Array.isArray(plant.Size) ? (
                            plant.Size.map((size) => (
                              <button>
                                <div className="font-bold border border-green ml-1 w-8 text-center text-xl">
                                  {size}
                                </div>
                              </button>
                            ))
                          ) : (
                            <p>plant Size doesn't exist !</p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-row mt-12 ">
                        <AddToCart addToCart={addToCart} plant={plant._id} />
                        <QuantityButton
                          quantity={quantity}
                          setQuantity={setQuantity}
                          quantityMax={plant.Quantity}
                        />
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
