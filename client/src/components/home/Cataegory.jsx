import bonsai from "../../assets/images/category/bonsaii.jpg"
import cacti from "../../assets/images/category/cactti.jpg"
import creepers from "../../assets/images/category/creeper.jpg"
import succulents from "../../assets/images/category/succullents.jpg"
import seeds from "../../assets/images/category/seeds.jpg"
import gifts from "../../assets/images/category/gift.jpg"
const Category = () => {
    return (
        <div className="container mx-auto pt-12">
            <div className="flex flex-row items-center pt-9 pb-4">
                <p className="font-bold text-green text-[45px]">
                    Shop By
                </p>
                <p className="pl-1 font-black  text-[45px]">
                    Type
                </p>
            </div>
            <div className="flex flex-row  justify-around">
                <div className="flex  flex-col basis-1/6 items-center bg-white rounded overflow-hidden shadow-lg mr-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src={bonsai} />
                    </div>
                    <a  href="/#" className="text-sm mt-6 mb-2 font-bold">BONSAI</a>
                </div>
                <div className="flex  flex-col basis-1/6 items-center  bg-white rounded overflow-hidden shadow-lg mx-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src={cacti} />
                    </div>
                    <a href="/#" className="text-sm mt-6 mb-2 font-bold">CACTI</a>
                </div>
                <div className="flex flex-col basis-1/6 items-center  bg-white rounded overflow-hidden shadow-lg mx-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src={creepers} />
                    </div>
                    <a href="/#" className="text-sm mt-6 mb-2 font-bold">CREEPERS</a>
                </div>
                <div className="flex flex-col basis-1/6 items-center  bg-white rounded overflow-hidden shadow-lg mx-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src={succulents} />
                    </div>
                    <a href="/#" className="text-sm mt-6 mb-2 font-bold">SUCCULENTS</a>
                </div>
                <div className="flex flex-col basis-1/6 items-center  bg-white rounded overflow-hidden shadow-lg mx-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src={seeds} />
                    </div>
                    <a href="/#" className="text-sm  mt-6 mb-2 font-bold">SEEDS</a>
                </div>
                <div className="flex flex-col basis-1/6 items-center  bg-white rounded overflow-hidden shadow-lg ml-7 mb-14">
                    <div className="aspect-ratio-container">
                        <img alt="Bonsai" src={gifts} />
                    </div>
                    <a href="/#" className="text-sm mt-6 mb-2 font-bold">GIFTS</a>
                </div>
            </div>
        </div>
    )
}
export default Category;