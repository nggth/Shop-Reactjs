import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/pic2.jpg';

const Cloth = ({ cloth }) => {
    const { name, slug, images, price } = cloth;

    return (
         <article className="cloth">
             <div className="img-container">
                 <img src={ images[0] || defaultImg } alt="single cloth" />
                 <div className="price-top">
                     <h6>{price} VNĐ</h6>
                 </div>
                 <Link to={`/clothes/${slug}`} className="btn-primary cloth-link">
                     features
                 </Link>
             </div>
             <p className="cloth-info">{ name }</p>
         </article>
    );
};

export default Cloth;
