import Card from "../Card/Card";
import "././Catalog.css";
import Foto1 from "/public/card/card_foto.jpg";
import Foto2 from "/public/card/foto2.png";
import Foto3 from "/public/card/foto3.png";
import { catalog } from "../../data";
import { useState } from "react";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [sorting, setSorting] = useState("");

  function search(e) {
    setQuery(e.target.value);
  }

  const filterProducts = catalog.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  function sort(event) {
    const sortValue = event.target.value;
    setSorting(sortValue);
  }

  const sortProducts = (sorting, catalog) => {
    switch (sorting) {
      case "price_asc":
        return [...catalog].sort((a, b) => a.price - b.price);
      case "price_desc":
        return [...catalog].sort((a, b) => b.price - a.price);
      case "count_desc":
        return [...catalog].sort((a, b) => b.count - a.count );
      default:
        return catalog;
    }
  };

  const sortAndFilterProducts = sortProducts(sorting, filterProducts);

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
        <input
          onChange={search}
          type="search"
          name="search"
          placeholder="Find me"
        />
        <select onChange={sort} name="" id="">
          <option value="price_asc">По возрастанию цены</option>
          <option value="price_desc">По убыванию цены</option>
          <option value="count_desc">Остаток по количеству</option>
        </select>
        <br /> <br /> <br /> <br />
        <div className="cards">
          {sortAndFilterProducts.length ? (
            sortAndFilterProducts.map((card, index) => {
              return <Card key={index} {...card} />;
            })
          ) : (
            <h2>По запросу "{query}" ничего не найдено</h2>
          )}
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </div>
  );
}
