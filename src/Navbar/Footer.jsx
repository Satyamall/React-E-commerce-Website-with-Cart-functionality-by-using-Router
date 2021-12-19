import { Link } from "react-router-dom";
import styled from "styled-components"
import style from "./Navbar.module.css";

const FooterBox=styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   background: rgb(238,238,233);
   align-items: center;
   padding-bottom: 50px;
`;

export default function Footer(){

    return (
       <FooterBox>
            <div className={style.box3}>
                <h1>Join the Movement</h1>
                <p>Begin your planting journey with 10% off.</p>
                <div className={style.text}>
                  <Link to="/account" className={style.btn}>Click here for Account</Link>
                </div>
            </div>
           <div className={style.footer}>
           <div>
               <h1>Help</h1>
               <p>Help Center</p>
               <div>
                  <Link className={style.link}>Contact us</Link>
               </div>
           </div>
           <div>
               <h1>Shop</h1>
               <div>
                <Link className={style.link}>Men's</Link>
               </div>
               <div>
                 <Link className={style.link}>Womens's</Link>
               </div>
               <Link className={style.link}>Kid's</Link>
           </div>
           <div>
               <h1>Company</h1>
               <div>
                  <Link className={style.link}>About Us</Link>
               </div>
               <Link className={style.link}>Tree Planting FAQ</Link>
           </div>
           <div>
               <h1>Social</h1>
               <div>
                   <img className={style.social} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYCBdaQNbcZuHw6V2D7Jb7aD3NTXj_ubEfA&usqp=CAU" alt="" />
               </div>
           </div>
           </div>
           <div className={style.text2}>
               <p>All prices are in Indian Rupees, orders are processed & shipped directly from the India.</p>
               <hr />
               <h4>©2021 tentree. All Rights Reserved. Privacy Policy & Copyright Notice.</h4>
               <h3>This is Created by Satya Prakash Mall</h3>
               <hr />
           </div>
       </FooterBox>
    )
}