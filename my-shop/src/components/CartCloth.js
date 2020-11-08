import React from 'react';
import defaultImg from '../images/pic2.jpg';

export default function CartCloth({ ...props }) {
    const { id, name, images, price } = props.cloth;

    const addToCart = (id) => {
        props.addToCart(id);
    };
    function showSuccess() {
        alert("Successfully");
    }

    return (
        <div>
         <article className="cloth">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt="single cloth" />
                    <div className="price-top">
                        <h6>{price} VNĐ</h6>
                    </div>
                    <button className="btn-primary cloth-link"
                        onClick= {() => {
                            addToCart(id);
                            showSuccess()
                        }} 
                    >
                        Add to Cart
                    </button>
                </div>
                <p className="cloth-info">{name}</p>
            </article>
        </div>
    );
};
