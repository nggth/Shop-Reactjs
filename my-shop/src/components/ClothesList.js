import React from 'react'
import Cloth from "./Cloth";

export default function ClothesList({clothes}) {
    if(clothes.length === 0) { 
        return (
            <div className="empty-search">
            <h3>Unfortunately</h3>
            </div>
        );
    }
    
    return (
        <section className="clotheslist">
            <div className="clotheslist-center">
                {clothes.map(item => {
                    return <Cloth key={item.id} cloth={item} />;
                })}
            </div>
        </section>
    );
}
