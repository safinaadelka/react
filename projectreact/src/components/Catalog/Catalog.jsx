import Card from "../Card/Card";
import "././Catalog.css";
import Foto1 from "/public/card/card_foto.jpg";
import Foto2 from "/public/card/foto2.png";
import Foto3 from "/public/card/foto3.png";

export default function Catalog() {
  return (
    <div className="catalog_cards">
      <br /> <br />       <br /> <br />
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
        <div className="cards">
          <Card name="название товара 1" price="1500" foto={Foto1} />
          <Card name="название товара 2" price="1233" foto={Foto2} />
          <Card name="название товара 3" price="3200" foto={Foto3} />
          <Card name="название товара 4" price="155" foto={Foto1} />
          <Card name="название товара 5" price="166" foto={Foto2} />
          <Card name="название товара 6" price="166" foto={Foto3} />
          <Card name="название товара 7" price="1999" foto={Foto1} />
          <Card name="название товара 8" price="1250" foto={Foto2} />
          <Card name="название товара 9" price="4999" foto={Foto3} />
        </div>


        <br /> <br />       <br /> <br />       <br /> <br />      <br /> <br />
      </div>
    </div>
  );
}
