import style from "./Style.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CartItemCard from "../Card/CartItemCard";
import Pagination from "../Card/Pagination";

export default function Cart() {

    const getItemCart = () => {
        return axios.get(`https://json-server-e-commerce-api.herokuapp.com/cartItems`)
    }

    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    var [cartPrice, setCartPrice] = useState(0)
    var [items, setItems] = useState(0);

    const handlegetItem = async () => {
        try
        {
            const { data } = await getItemCart();
            setIsloading(true);
            setData(data)
            var total = 0;
            data.map((item) => total += item.price);
            setCartPrice(total);
            setItems(data.length);
            setIsloading(false)
        }
        catch(err){

        }

    }

    useEffect(() => {
        handlegetItem();
    }, []);

    const handleRemove = async ({ id }) => {
        const config = {
            url: `https://json-server-e-commerce-api.herokuapp.com/cartItems/${id}`,
            method: "delete"
        }
        await axios(config);
        await handlegetItem();
    }

    const [page, setPage] = useState(1);
    const changePageTo = (num) => {
        if (num <= 1) {
            setPage(1);
            return;
        }
        setPage(num);
    };
    var perPage = 3;

    if (isLoading) {
        return <h1 className={style.cart}>Loading.......</h1>
    }

    return (
        <div className={style.cart}>
            <h1>Cart Item Page</h1>
            <div className={style.cartItem}>
                <h3>Total Cart Items: <span style={{color: "black"}}>{items}</span></h3>
                <h3>Total Price of Cart Items: <span style={{color: "black"}}> ₹ {cartPrice}</span></h3>
            </div>
            <div>
                {
                    data.filter(
                        (_, i) => i >= (page - 1) * perPage && i < page * perPage
                    ).map((item) => {
                        return <CartItemCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            handleRemove={handleRemove}
                        />
                    })
                }
            </div>
            <div style={{ marginTop: 20 }}>
                <Pagination
                    currentPage={page}
                    onClickCallback={(page) => changePageTo(page)}
                    total={Math.ceil(items / 3)}
                />
            </div>
        </div>
    )
}