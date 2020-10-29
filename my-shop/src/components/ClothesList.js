import React from 'react'
//import Cloth from "./Cloth";

import CartCloth from "./CartCloth";

export default function ClothesList({clothes}) {
    if(clothes.length === 0) { 
        return (
            <div className="empty-search">
            <h3>Unfortunately no clothes matched your search</h3>
            </div>
        );
    }
    
    return (
        <section className="clotheslist">
            <div className="clotheslist-center">
                {clothes.map(item => {
                    return <CartCloth key={item.id} cloth={item} />;
                })}
            </div>
        </section>
    );
}
