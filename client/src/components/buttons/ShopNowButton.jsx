const ShopNowButton = ({type,showBestRatePlant}) => {
  return (
    <button className="bg-green hover:bg-green-700  text-white font-bold py-1 px-11 mt-9 mb-2 rounded-md  " onClick={()=>{showBestRatePlant(type)}}>
      Shop Now
    </button>
  );
};
export default ShopNowButton;
