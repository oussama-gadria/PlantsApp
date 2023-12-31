import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BagSvg = () => {
  const navigate = useNavigate();
  const [numberPlantInCart, setNumberPlantInCart] = useState();
  const cartId = localStorage.getItem("cartId");

  const getCartData = useCallback(async () => {
    if (cartId) {
      await axios
        .get(`http://localhost:5000/cart/getCartInfo/${cartId}`)
        .then((response) => {
          setNumberPlantInCart(response.data.length);
        });
    }
  }, [cartId]);

  useEffect(() => {
    getCartData();
  }, [getCartData]);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#50806B"
        className="w-8 h-8 "
        onClick={() => navigate(`/cart/${cartId}`)}
        style={{ cursor: "pointer" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      {{ numberPlantInCart } && (
        <span className="bg-red-500 text-white text-xs rounded-full px-1  absolute top-1">
          {numberPlantInCart}
        </span>
      )}
    </div>
  );
};
export default BagSvg;
