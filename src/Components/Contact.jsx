


import style from "./Style.module.css";
import { Link } from "react-router-dom";

export default function Contact(){

    return (
        <div>
            <div className={style.box13}>
               <h1>Contact Us</h1>
               <p>We look forward to helping you!</p>
               <div className={style.btn1}><Link to="/account" className={style.btn}>Please Login For Contact</Link></div>
            </div>
            <div className={style.text3}>
                <h1>Our Customer Care Team</h1>
                <p>Have a question not answered in our help center? we're happy to help! Our email response time is 1-2 business days.</p>
                <h1>Contact</h1>
                <p>Phone: 1-833-520-1145</p>
                <p>Email: support@tentree.com</p>
                <h1>Business Hours</h1>
                <p>Monday - Friday 9:00AM to 5:00PM PST</p>
                <p>Saturday and Sunday - Closed</p>
                <p>Indian Holidays - Closed</p>
                <h1>Holiday Extended Hours</h1>
                <p>Extended hours for holiday season will begin November.1st</p>
                <p>Monday - Friday 7:00AM to 6:00PM PST</p>
                <h1>Office</h1>
                <p>230 - 1275 Venables St, Vancouver</p>
                <p>India Columbia, India, V6A 2E4</p>
            </div>
        </div>
    )
}