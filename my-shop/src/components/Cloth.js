import React from 'react';
import { Link } from 'react-router-dom';
import defautImg from '../images/pic2.jpg';
import PropTypes from "prop-types";

export default function Cloth({ cloth }) {
    const { name, slug, images, price } = cloth;
    return (
        <article className="cloth">
            <div className="img-container">
                <img src={images[0] || defautImg } alt="single cloth"/>
            <div className="price-top">
                <h6>${price}</h6>
            </div>
            <Link to={`/clothes/${slug}`} className="btn-primary cloth-link">
                Features
            </Link>
            </div>
            <p className="cloth-info">{name}</p>
        </article>
    );
}

Cloth.propTypes = {
    cloth: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.string.isRequired //number?
    })
};
