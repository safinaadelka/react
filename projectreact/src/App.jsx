import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import CatalogPage from "./Pages/Catalog/Catalog";
import CardPage from "./Pages/CardPage/CardPage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import BasketPage from './Pages/BasketPage/BasketPage'
import Start from "./Pages/Start/Start";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [basket,setBasket] = useState([]); 


  return (
    <>
     
      <Header basket={basket}/>

      <Routes>
        <Route path="/" element={<Start />} />
        {/* <Route path="/catalog" element={<CatalogPage />} /> */}
        <Route path="/catalog" element = {<CatalogPage addToBasket={setBasket} basket={basket}/>}  />
        <Route path="/" element={<Banner />} />{" "}
        {/* Переместите Banner внутрь маршрута "/" */}
        <Route path="/catalog/:id" element={<CardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/basket" element = {<BasketPage basket={basket}/>} />
        <Route path="/basket/:id" element = {<CardPage basket={basket}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
