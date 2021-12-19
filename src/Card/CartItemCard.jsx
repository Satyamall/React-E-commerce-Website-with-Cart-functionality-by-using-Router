

import style from "./Card.module.css";

export default function CartItemCard({ id, name, price, image, handleRemove }) {

    return (<div className={style.cardCart}>
        <div>
            <img width="100%" height="350px" src={image} alt="" />
        </div>
        <div className={style.text1}>
            <h3>Name of Item: <span style={{color: "gray"}}>{name}</span></h3>
            <h3>Price: <span style={{color: "gray"}}>₹ {price}</span></h3>
            <div>
                <button onClick={() => handleRemove({id})}>REMOVE ITEM</button>
            </div>
        </div>
    </div>
    );
}