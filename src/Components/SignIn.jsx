import { Link } from "react-router-dom";
import style from "./Style.module.css";

export default function SignIn(){

    return(
        <div className={style.sign}>
            <h1 className={style.htag}>Create An Account</h1>
            <div className={style.account}>
                <h1>Personal Information</h1>
               <input type="text" placeholder="Enter Your Username" />
               <br />
               <input type="email" placeholder="Enter your Email" />
               <br />
               <input type="number" placeholder="Enter Your Mobile No." />
               <br />
               <input type="password" placeholder="Enter Your Password" />
               <br />
               <button className={style.btn2}>CREATE</button>
            </div>
            <p>or Return to login</p>
            <div className={style.log}><Link to="/account" className={style.btn2}>LOGIN</Link></div>
        </div>
    )
}