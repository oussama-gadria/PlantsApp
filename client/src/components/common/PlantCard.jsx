
const PlantCard = ({ plant }) => {
    return (
        <div>
            <div className="bg-white rounded overflow-hidden shadow-lg mx-7 mb-14 dark:bg-darkBlue dark:text-white dark:border-darkBlue">
                <div className="">
                    <img src={plant.Image} alt="Country Flag" />
                </div>
                <div className="px-6 py-4">
                    <div className="flex items-center mb-2 pt-2">
                        <div className="text-black  font-bold text-xs mr-1">Name :</div>
                        <p className="text-black text-xs ">{plant.Name}</p>
                    </div>
                    <div className="flex items-center mb-1">
                        <div className="text-black  font-bold text-xs mr-2">Price :</div>
                        <p className="text-black text-xs ">{plant.Price}</p>
                    </div>
                    <div className="mt-6">
                        <button className="bg-green w-full hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full">
                            Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlantCard;