import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PlantDetails from "./pages/PlantDetails";
import Footer from "./components/footer/Footer";
import BestRating from "./pages/BestRate";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useReducer, useState } from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CartPage from "./pages/CartPage";
import OrderDetails from "./pages/OrderDetails";
import FeedBack from "./pages/Feedback";
import ThankYouFeedback from "./pages/ThankYouFeedback";

function App() {
  const initialToken = "";
  const [feedbackRate, setFeedbackRate] = useState(null);
  const tokenReducer = (token, action) => {
    if (action.type === "createToken") {
      localStorage.setItem("token", action.token);
      return localStorage.getItem("token");
    }
  };
  const [token, dispatch] = useReducer(tokenReducer, initialToken);
  const handleChangeToken = (token) => {
    dispatch({
      type: "createToken",
      token: token,
    });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route
          path="/plantDetails/:plantName"
          element={<PlantDetails />}
        ></Route>
        <Route
          path="/bestRatedPlant/:categoryName"
          element={<BestRating />}
        ></Route>
        <Route
          path="/SignIn"
          element={<SignIn handleChangeToken={handleChangeToken} />}
        ></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/cart/:cartId" element={<CartPage />}></Route>
        <Route path="/OrderDetails" element={<OrderDetails />}></Route>
        <Route
          path="/Feedback"
          element={
            <FeedBack
              setFeedbackRate={setFeedbackRate}
              feedbackRate={feedbackRate}
            />
          }
        ></Route>
        <Route
          path="/ThankYou"
          element={
            <ThankYouFeedback
              setFeedbackRate={setFeedbackRate}
              feedbackRate={feedbackRate}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
