import { useEffect, useState } from "react";
import PlantCard from "../components/cards/PlantCard";
import axios from "axios";
import FilterByCategory from "../components/filter/FilterByCategory";
import FilterByPrice from "../components/filter/FilterByPrice";
import FilterByType from "../components/filter/FilterByType";
import SortBy from "../components/filter/SortBy";

const Shop = () => {
    const [plantsList, setPlantList] = useState([]);
    const fetchPlants = async () => {
        await axios.get("http://localhost:5000/plant/getPlants")
            .then((response) => setPlantList(response.data))
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchPlants();
    }, [])
    return (
        <>
            <div className=" bg-gray h-[184px] flex items-center">
                <div className="container  flex flex-row mx-auto items-center ">
                    <div className="font-bold text-green ml-4 text-[60px]">Shop | </div>
                    <div className="font-bold text-black ml-4 text-[16px] mt-12">Find the perfect plant for your space </div>
                </div>
            </div>
            <div className="flex flex-col mx-11">
                <div className="flex flex-row justify-between mt-11">
                    <div>
                        <FilterByCategory />
                        <FilterByPrice />
                        <FilterByType />
                    </div>
                    <div>
                        <SortBy />
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-11">
                    {plantsList.map((plant) => (
                        <PlantCard plant={plant} />
                    )
                    )}
                </div>
            </div>
        </>
    )
}
export default Shop;