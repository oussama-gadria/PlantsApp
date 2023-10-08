import BestSellingCard from "../cards/BestSellingCard";

const BestSelling = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-row items-center pt-9 pb-4">
                    <p className="font-bold text-green text-[45px]">
                        Best
                    </p>
                    <p className="pl-1 font-black  text-[45px]">
                        Rate
                    </p>
                </div>
                <BestSellingCard/>
            </div>
        </>
    )
}
export default BestSelling;