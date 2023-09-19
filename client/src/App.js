import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/Route";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignIn from "./pages/SignIn";
import FeedBack from "./pages/Feedback";
import ThankYouFeedback from "./pages/ThankYouFeedback";
import PlantDetails from "./pages/PlantDetails";

function App() {
  const initialToken = "";
  const [feedbackRate, setFeedbackRate] = React.useState(null);

  const tokenReducer = (token, action) => {
    if (action.type === "createToken") {
      localStorage.setItem("token", action.token);
      return localStorage.getItem("token");
    }
    return token;
  };

  const plantsInCartReducer = (plantsInCart, action) => {
    if (action.type === "addPlantToCart") {
      return [...plantsInCart, action.plantId];
    }
    return plantsInCart;
  };

  const [token, tokenDispatch] = React.useReducer(tokenReducer, initialToken);
  const [plantsInCart, plantsInCartDispatch] = React.useReducer(
    plantsInCartReducer,
    0
  );

  const handleChangeToken = (token) => {
    tokenDispatch({
      type: "createToken",
      token: token,
    });
  };

  const addPlantInCart = (plantId) => {
    plantsInCartDispatch({
      type: "addPlantToCart",
      plantId: plantId,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route
          path="/SignIn"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <SignIn handleChangeToken={handleChangeToken} />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/Feedback"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <FeedBack
                setFeedbackRate={setFeedbackRate}
                feedbackRate={feedbackRate}
              />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/ThankYou"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <ThankYouFeedback
                setFeedbackRate={setFeedbackRate}
                feedbackRate={feedbackRate}
              />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/plantDetails/:plantName"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <PlantDetails addPlantInCart={addPlantInCart} />
              <Footer />
            </div>
          }
        ></Route>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={React.cloneElement(route.element)}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
