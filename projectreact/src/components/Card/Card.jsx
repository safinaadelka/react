import "././Card.css";
import Heart from "/public/card/heart.png";
import Bag from "/public/card/black_bag.png";
import Foto from "/public/card/card_foto.jpg";

export default function Card({name, price, foto}) {
  return (
    <div className="card">
      <img src={foto} alt="Product" className="foto" />

      <h3 className="name">{name}</h3>
      <div className="card_actions">
        <h2 className="price">{price} ₽</h2>
        <div className="actions">
          <button className="like">
            <img src={Heart} alt="" className="like_img" />
          </button>
          <button className="bag">
              <img src={Bag} alt="" className="bag_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
