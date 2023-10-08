import { useState } from "react";
import "./feedback.scss";
import { useNavigate } from "react-router-dom";
import IconStart from "../../assets/svg/IconStart";
const buttons = [1, 2, 3, 4, 5];
function FeedBackComponent({ setFeedbackRate }) {
  const [number, selectNumber] = useState(null);
  const navigate = useNavigate();

  const OnSelectNumber = (number) => {
    selectNumber(number);
  };

  const OnSubmit = () => {
    setFeedbackRate(number);
    navigate("/ThankYou");
  };

  return (
    <div className="flex  justify-center items-center ">
      <div className="flex  justify-center items-center py-5 ">
        <div className="feedback">
          <div className="pt-4">
            <div className="pl-4">
              <button className="star-icon">
                <IconStart />
              </button>
            </div>
            <div className="pt-4  card-title pl-5">How did we do?</div>
            <div className="card-text pl-5 mt-12">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </div>
            <div className="flex justify-around mt-16 mb-8">
              {buttons.map((item) => (
                <button
                  type="button"
                  className={`circular-button ${
                    number === item ? "button-selected" : "button-not-selected"
                  }`}
                  onClick={() => OnSelectNumber(item)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-lg   mt-2 submit-button "
                onClick={OnSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBackComponent;
