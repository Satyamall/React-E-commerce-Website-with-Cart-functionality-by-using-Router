
import style from "./Card.module.css";

export default function Card({ id, name, price, image, handleCart }) {

    return (<div className={style.card}>
        <div>
            <img width="100%" height="350px" src={image} alt="" />
        </div>
        <div className={style.text}>
            <h3>{name}</h3>
            <h3 style={{color: "gray"}}>Price: ₹ {price}</h3>
            <div>
                <button onClick={() => handleCart({name, image, price})}>ADD CART</button>
            </div>
        </div>
    </div>
    );
}