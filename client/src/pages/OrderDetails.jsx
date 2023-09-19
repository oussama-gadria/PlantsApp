import { useNavigate } from "react-router-dom";
import PaperAirPlane from "../assets/svg/Paper-airplane";
import ShoppingCart from "../assets/svg/ShoppingCart";

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gray h-[184px] flex items-center justify-center">
        <div className="font-bold text-green ml-4 text-[60px]">
          THANK YOUR FOR YOUR ORDER
        </div>
      </div>
      <div className="flex justify-center py-24">
        <div className="w-[700px] h-[700px] flex flex-col items-center bg-white rounded-lg shadow ">
          <a href="/#">
            <img
              className="rounded-t-lg"
              src="https://i.etsystatic.com/26508026/r/il/239fc1/3285973706/il_fullxfull.3285973706_59cx.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-bold text-center text-2xl text-gray-700 ">
              Your order has been successfully sent. The customer will contact
              you soon.
            </p>
            <div className="flex flex-row justify-between mt-12">
              <button
                className="bg-white text-xl w-[250px] flex   text-green shadow-lg shadow-green font-bold py-3 px-4 rounded-md"
                onClick={() => navigate("/")}
              >
                Go Back To Shopping
                <ShoppingCart />
              </button>
              <button
                className="bg-green text-xl w-[250px] flex   text-white  font-bold py-3 px-4 rounded-md"
                onClick={() => navigate("/FeedBack")}
              >
                Send a Feedback
                <div className="pl-4">
                  <PaperAirPlane />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
