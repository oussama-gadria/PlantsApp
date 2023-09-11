import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Cart = () => {
  const cartId = localStorage.getItem("cartId");
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([]);
  const [PriceTotal, setTotalPrice] = useState();
  const [shippingAdresse, setShippingAdresse] = useState();
  const token = localStorage.getItem("token");
  const CartId = localStorage.getItem("cartId");

  const createOrder = async () => {
    const userConnect = jwt_decode(token);
    const userId = userConnect.id;

    await axios
      .post("http://localhost:5000/order/addOrder", {
        userId,
        CartId,
        PriceTotal,
        shippingAdresse,
      })
      .then((response) => {
        console.log(response.data);
      });
    navigate("/OrderDetails");
  };

  const deletePlantFromCart = async (plantId) => {
    try {
      await axios.delete(
        `http://localhost:5000/cart/deletePlantFromCart/${CartId}/${plantId}`
      );
      getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  const getCartData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/cart/getCartInfo/${cartId}`
      );
      setCartList(response.data);
    } catch (error) {
      console.error("Error retrieving cart data:", error);
    }
  }, [cartId]);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      total = total + cartList[i].quantity * cartList[i].plant.Price;
    }
    setTotalPrice(total);
  }, [cartList]);

  useEffect(() => {
    getCartData();
  }, [getCartData]);

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {cartList.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/6">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">
                  Total
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">
                  Action
                </h3>
              </div>
              {cartList.map((item) => (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex flex-row items-center space-x-8 w-2/6">
                    <div className="w-42">
                      <img className="h-36 " src={item.plant.Image} alt="" />
                    </div>
                    <span className="font-bold text-sm">{item.plant.Name}</span>
                  </div>
                  <div className="flex justify-center w-1/6">
                    {item.quantity}
                  </div>
                  <span className="text-center w-1/6 font-semibold text-sm">
                    {item.plant.Price} $
                  </span>
                  <span className="text-center w-1/6 font-semibold text-sm">
                    {item.plant.Price * item.quantity} $
                  </span>
                  <button
                    className="font-extrabold text-red-500 w-1/6  text-gray-500 text-xs"
                    onClick={() => deletePlantFromCart(item.plant._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-md uppercase">
                  Items {cartList.length}
                </span>
                <span className="font-semibold text-md">{PriceTotal}$</span>
              </div>
              <div>
                <label className="font-semibold inline-block mb-3 text-md uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-md border-[3px] rounded-lg border-green ">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="ShippingAdresse"
                  className="font-semibold inline-block mb-3 text-md uppercase"
                  onChange={(e) => setShippingAdresse(e.target.value)}
                >
                  Shipping Adresse
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your Shipping Adresse"
                  className="p-2 font-semibold text-md w-full border-[3px] rounded-lg border-green "
                />
              </div>
              <div className="pb-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-md uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-md border-[3px] rounded-lg border-green w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-lg">
                Apply
              </button>
              <div className="border-t mt-8 border-green ">
                <div className="flex font-semibold justify-between py-6 text-md uppercase">
                  <span>Total cost</span>
                  <span>{PriceTotal + 10}$</span>
                </div>
                <button
                  className="bg-green font-semibold hover:bg-indigo-600 py-3 text-lg text-white uppercase w-full rounded-lg"
                  onClick={createOrder}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
