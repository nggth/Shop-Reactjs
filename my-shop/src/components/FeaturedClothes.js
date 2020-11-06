import React from 'react';
import Cloth from './Cloth';
import Title from './Title';

const FeaturedClothes = ({ ...props }) => {
    const featuredClothes = props.items.filter(cloth => cloth.featured === true);

    return (
        <section className="featured-clothes">
            <Title title="featured clothes"/>
            <div className="featured-clothes-center">
                {featuredClothes.map(cloth => {
                    return <Cloth key ={cloth.id} cloth={cloth} />;
                })}
            </div>
        </section>
    );
};

export default FeaturedClothes;
