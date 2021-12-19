import { Link } from "react-router-dom";
import style from "./Style.module.css";
import img1 from "./Homeimage1.jpg";
import img2 from "./Homeimage2.jpg";

export default function Home(){
    return(
        <div className={style.home}>
            <div className={style.box}>
               <img src={img1} alt="" />
               <img src={img2} alt="" />
            </div>
            <div className={style.box1}>
                <h3>Shop by Category</h3>
                <p>Made for everyday living. We have something for everyone.</p>
                <div className={style.box2}>
                    <Link to="/men" className={style.men}>
                        Shop Men's
                    </Link>
                    <Link to="/women" className={style.women}>
                        Shop Women's
                    </Link>
                    <Link to="/kid" className={style.kid}>
                        Shop Kid's
                    </Link>
                </div>
            </div>
        </div>
    )
}