import Card from "../Card/Card";
import "././Catalog.css";
import Foto1 from "/public/card/card_foto.jpg";
import Foto2 from "/public/card/foto2.png";
import Foto3 from "/public/card/foto3.png";
import { catalog } from "../../data";
import { useState } from 'react'; 

export default function Catalog() {
  const[query, setQuery] = useState("")


  function search (e){
    setQuery(e.target.value)
  }


  const filterProducts = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="catalog_cards">
      <br /> <br /> <br /> <br />
      <div className="container">
        <p className="catalog_name">Главная \ Каталог</p>
        <br />
        <div className="filters">
          <a href="" className="filter filter_black">
            Всё
          </a>
          <a href="" className="filter">
            Топ
          </a>
          <a href="" className="filter">
            Низ
          </a>{" "}
          <a href="" className="filter">
            Обувь
          </a>
        </div>
        <br /> <br />
        <input onChange={search} type="search" name="search" placeholder="Find me" />
        <br /> <br />      <br /> <br />
        <div className="cards">
          {
            filterProducts.length ?

          filterProducts.map((card, index) => {
            return <Card key={index} {...card} />;
          })
        : 
        

        <h2>Nothing is find by your find search</h2>

 
        }
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </div>
  );
}
