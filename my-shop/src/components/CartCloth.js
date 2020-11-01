import React from 'react';
// import { Link } from 'react-router-dom';
import defaultImg from '../images/pic2.jpg';
// import { memo } from "react";
// import data from '../data';

export default function CartCloth({ setCart, cart, cloth, clothes }) {
    const { name, slug, images, price } = cloth;
    // console.log(name);

    const addToCart = (cloth) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => cloth.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...cloth,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
        // console.log(cloth)
        console.log("hello too")
    };

    return (
        <>
         <article className="cloth">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt="single cloth" />
                    <div className="price-top">
                        <h6>{price} VNĐ</h6>
                    </div>
                    <button className="btn-primary cloth-link"
                        onClick={() => {addToCart(cloth);
                            localStorage.setItem("cart", JSON.stringify(cloth));
                        }}>
                        Add to Cart
                    </button>
                </div>
                <p className="cloth-info">{name}</p>
            </article>
        </>
    );
}
