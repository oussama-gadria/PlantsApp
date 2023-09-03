import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PlantDetails from "./pages/PlantDetails";
import Footer from "./components/footer/Footer";
import {
  BestRatedPlantsProvider,
} from "./context/BestRatingContext";
import BestRating from "./pages/BestRate";

function App() {
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
