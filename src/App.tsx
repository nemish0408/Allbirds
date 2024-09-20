import Layout from "./Components/Layout/Layout";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Rerun from "./Pages/Rerun/Rerun";
import Shocks from "./Pages/Shocks/Shocks";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productdetails" element={<ProductDetails />}></Route>
          <Route path="/rerun" element={<Rerun/>}></Route>
          <Route path="/shocks" element={<Shocks/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
