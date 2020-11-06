import React from 'react'
import CartCloth from './CartCloth';

export default function ClothesList({ ...props }) {
    if(props.clothes.length === 0) { 
        return (
            <div className="empty-search">
                <h3>Unfortunately no clothes matched your search</h3>
            </div>
        );
    }
    
    return (
        <section className="clotheslist">
            <div className="clotheslist-center">
                {props.clothes.map(item => {
                    return <CartCloth { ...props } key={item.id} cloth={item} />;
                })}
            </div>
        </section>
    );
};
