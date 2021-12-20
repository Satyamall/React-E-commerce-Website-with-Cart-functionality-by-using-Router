

import style from "./Style.module.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import axios from "axios";
import { useEffect, useState} from "react";
import {v4 as uuid} from "uuid";

export default function Kid(){

    const [data,setData]=useState([]);
    const [isLoading,setIsloading]=useState(true);

    const getData=()=>{
        return axios.get("https://json-server-e-commerce-api.herokuapp.com/products")
    }

    useEffect(()=>{
        getData()
        .then((res)=>{
            setIsloading(true);
            setData(res.data[2].kid);
            setIsloading(false);
        })
        .catch((err)=>{

        })
    },[])

    const handleCart=({name,image,price})=>{
        const payload={
            id: uuid,
            name: name,
            image: image,
            price: price,
        }
        const config={
            url: "https://json-server-e-commerce-api.herokuapp.com/cartItems",
            method: "post",
            data: payload
        } 
        alert("Item Added Successfully, If you want to see it then you will go to cart Page");
        return axios(config);
    }
    if(isLoading)
    {
        return <h1 className={style.cart}>Loading......</h1>
    }

    return (
        <div>
            <div className={style.box5}>
                <h1>Earth-First Kid's Apparel</h1>
                <p>Essentials for the things you do every day, made with the most <br /> sustainable (and comfortable) materials in the world.</p>
                <div className={style.text}>
                    <Link to="/kid" className={style.btn}>SHOP KID'S</Link>
                </div>
            </div>
            <div style={{textAlign: "center",margin: 40}}>
                <h1 style={{textDecoration: "underline"}}>Kid's Clothes</h1>
            </div>
            <div className={style.cardBox}>
               {
                   data.map((item)=>{
                       return <Card 
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          price={item.price}
                          image={item.image}
                          handleCart={handleCart}
                        />
                   })
               }
            </div>
        </div>
    )
}