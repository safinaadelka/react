import "././Card.css";
import Heart from "/public/card/heart.png";
import Bag from "/public/card/black_bag.png";
import Foto from "/public/card/card_foto.jpg";
import {Link} from 'react-router-dom'; 


export default function Card({name, price, id}) {
  return (
    <div className="card">
      <img src={Foto} alt="Product" className="foto" />

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
          <br /> 
         
        </div>
        
      </div>
      <Link to={`${id}`} className="link">Смотреть</Link>
      
    </div>
  );
}
