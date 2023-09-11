import BuyButton from "../buttons/BuyButton";
import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
    return (
        <div>
            <div className="bg-white rounded overflow-hidden shadow-lg mx-7 mb-14 dark:bg-darkBlue dark:text-white dark:border-darkBlue">
                <Link to={`/plantDetails/${plant.Name}`}>
                    <div className="">
                        <img src={plant.Image} alt="Country Flag" />
                    </div>
                </Link>
                <div className="px-6 py-4">
                    <div className="flex items-center mb-2 pt-2">
                        <div className="text-black  font-bold text-xl mr-1">Name :</div>
                        <p className="text-black font-semibold text-lg ">{plant.Name}</p>
                    </div>
                    <div className="flex items-center mb-1">
                        <div className="text-black  font-bold text-xl mr-2">Price :</div>
                        <p className="text-black font-semibold text-lg ">{plant.Price} $</p>
                    </div>
                    <div className="mt-6">
                        <BuyButton />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlantCard;