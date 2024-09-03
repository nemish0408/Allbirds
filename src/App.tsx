import Layout from "./Components/Layout/Layout";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
