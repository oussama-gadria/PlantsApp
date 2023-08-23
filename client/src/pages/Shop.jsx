import { useEffect, useState } from "react";
import PlantCard from "../components/common/PlantCard";
import axios from "axios";

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
            <div className="grid grid-cols-4">
                {plantsList.map((plant) => (
                    <PlantCard plant={plant} />
                )
                )}
            </div>
        </>
    )
}
export default Shop;