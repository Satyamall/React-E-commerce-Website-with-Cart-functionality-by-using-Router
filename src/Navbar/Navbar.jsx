
import styled from "styled-components";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const NavbarBox=styled.nav`
   width: 100%
   height: 70px;
   background: rgb(238,238,233);
   display: flex;
   gap: 1rem;
   align-items: center;
   justify-content: center;
   padding: 10px;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   flex-wrap: wrap;
`;

const ImgNav=styled.img`
   height: 50px;
`;


export default function Navbar(){

    return(
        <NavbarBox>
            <Link to="/men" className={style.link}>MEN</Link>
            <Link to="/women" className={style.link}>WOMEN</Link>
            <Link to="/kid" className={style.link}>KID</Link>
            <Link to="/"><ImgNav src="https://cdn.shopify.com/s/files/1/2341/3995/files/tt-logo--top-simple_2x_c58d381e-fd8f-4318-b46c-cc6b80672e4c.png?v=1605747862" alt="" /></Link>
            <Link to="/about" className={style.link}>ABOUT</Link>
            <Link to="/faq" className={style.link}>FAQ</Link>
            <Link to="/contact" className={style.link}>CONTACT</Link>
            <Link to="/account" className={style.link}><img className={style.account} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9sr2zMrJ4GnLvSX0CpKHJ2lqs1ggkcK5_A&usqp=CAU" alt=""/></Link>
            <Link to="/cart" className={style.link}><img className={style.cart} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZt8kVjylZOZw0CUtffjJrmrpuhgxa4jNtQ&usqp=CAU" alt=""/></Link>
        </NavbarBox>
    )
}