import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
         path="/"
          element={<Home/>}>
        </Route>
        <Route 
          path="/shop" 
           element={<Shop/>}> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
