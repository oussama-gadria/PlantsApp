import React from "react";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import PlantDetails from "../pages/PlantDetails";
import Footer from "../components/footer/Footer";
import BestRating from "../pages/BestRate";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import CartPage from "../pages/CartPage";
import OrderDetails from "../pages/OrderDetails";
import NotFoundPage from "../pages/NotFoundPage";
import OrdersPage from "../pages/OrdersPage";

const routes = [
  {
    path: "/",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/shop",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Shop />
        <Footer />
      </div>
    ),
  },
  
  {
    path: "/bestRatedPlant/:categoryName",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <BestRating />
        <Footer />
      </div>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <SignUp />
        <Footer />
      </div>
    ),
  },
  {
    path: "/AboutUs",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    ),
  },
  {
    path: "/ContactUs",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <ContactUs />
        <Footer />
      </div>
    ),
  },
  {
    path: "/cart/:cartId",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <CartPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/OrderDetails",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <OrderDetails />
        <Footer />
      </div>
    ),
  },
  {
    path: "/*",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <NotFoundPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/orders",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <OrdersPage />
        <Footer />
      </div>
    ),
  },
];

export default routes;
