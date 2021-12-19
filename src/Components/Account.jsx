import { Link } from "react-router-dom";
import style from "./Style.module.css";

export default function Account(){

    return(
        <div style={{textAlign: "center"}}>
        <h1 style={{marginTop: 120, fontSize: "45px"}}>Account Page</h1>
        <div style={{display: "flex",gap: "5rem",alignItems: "center",justifyContent: "center",margin: 50}}>
            <div>
                <h1>New Customer</h1>
                <p>By creating an account with our store, you will be able to <br /> move through the checkout process faster, store multiple <br /> shipping addresses, view and track your orders in your <br /> account and more.</p>
                <div className={style.b}><Link to="/sign" className={style.btn2}>CREATE AN ACCOUNT</Link></div>
            </div>
            <div>
                <h1>Old Customer</h1>
                <p>If you have an account with us, please log in.</p>
                <div className={style.login}>
                    <input type="email" placeholder="Email Address" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <button className={style.btn2}>LOGIN</button>
                </div>
            </div>
        </div>
        </div>
    )
}