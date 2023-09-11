const AddToCart = ({plant,addToCart}) => {
  return (
    <>
      <button className="bg-green text-xl w-[250px] hover:bg-green-700  text-white font-bold py-3 px-4 rounded-md" onClick={()=>addToCart(plant)}>
        Add To Cart
      </button>
    </>
  );
};
export default AddToCart;
