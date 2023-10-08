import { useNavigate } from "react-router-dom";
import IconStart from "../../assets/svg/IconStart";
import "./feedback.scss";
import ShoppingCart from "../../assets/svg/ShoppingCart";

function ThankYou({ feedbackRate }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="flex  justify-center items-center py-5 ">
          <div className="feedback">
            <div className="pt-4">
              <div className="pl-4">
                <button className="star-icon">
                  <IconStart />
                </button>
              </div>
              <div>
                <p className="card-text text-center pt-4">
                  <span
                    style={{
                      color: "#50806B",
                      backgroundColor: "#ffff",
                      borderRadius: "25px",
                      padding: "6px 10px",
                    }}
                  >
                    You selected {feedbackRate} out of 5
                  </span>
                </p>
              </div>
              <div className="pt-8 flex justify-center card-title">
                Thank you!
              </div>
              <div className="card-text pt-12 flex justify-center text-center">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
              </div>
              <div className="flex justify-center mt-8">
                <button
                  className="bg-white text-xl w-[250px] flex justify-center  text-green shadow-lg shadow-green font-bold py-3 px-4 rounded-md"
                  onClick={() => navigate("/")}
                >
                  Go Back To Shopping
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYou;
