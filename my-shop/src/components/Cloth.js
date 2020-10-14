import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/pic2.jpg';
import PropTypes from "prop-types";
import { memo } from "react";

//export default function Cloth({ cloth }) {
const Cloth = memo(({ cloth }) => {
    const { name, slug, images, price } = cloth;
    // console.log(name);

    return (
        <article className="cloth">
        <div className="img-container">
            <img src={images[0] || defaultImg} alt="single cloth" />
            <div className="price-top">
            <h6>${price}</h6>
            </div>
            <Link to={`/clothes/${slug}`} className="btn-primary cloth-link">
            features
            </Link>
        </div>
        <p className="cloth-info">{name}</p>
        </article>
    );
});
      

Cloth.propTypes = {
    cloth: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired //string?
    })
};
export default Cloth;
