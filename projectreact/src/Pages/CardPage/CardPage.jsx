import { useParams } from "react-router-dom";
import { catalog } from "../../data";
import Foto from "/public/card/card_foto.jpg";
import "././CardPage.css";


export default function CardPage() {
  const { id } = useParams();
  const product = catalog.find((product) => product.id === parseInt(id));

  return (
    <>
      <div className="container">
        <div className="card_page">
          <img src={Foto} alt="" className="foto" />
          <div className="info">
            <h1>{product.name}</h1>
            <p className="price">{product.price} ₽</p>
            <p className="text">В большинстве случаев мужчины для деловой и повседневной жизни выбирают рубашки спокойных оттенков и носят их по всем классическим правилам, где рубашка гораздо светлее пиджака и брюк. При таком подходе выбор цвета сорочки останавливается на белом, цвета шампань или голубом.</p>
            <button className="violet">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </>
  );
}
