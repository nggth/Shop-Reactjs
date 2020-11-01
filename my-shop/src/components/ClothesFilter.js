import React from 'react'
import { useContext } from 'react';
import { ClothesContext } from '../context';
import Title from './Title';
//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
const ClothesFilter = ({ clothes }) => {
    // react hooks
    const context = useContext(ClothesContext);
    const {
        handleChange,
        type,
        price,
        minPrice,
        maxPrice,
        sizeM,
        sizeL
    } = context;
    //get all unique types
    let types = getUnique(clothes, "type");
    //add all types
    types = ["all", ...types];
    //map to jsx
    types = types.map((item, index) => (
        <option key={index} value={item}>
        {item}
        </option>
    ));
    return (
        <section className="filter-container">
           <Title title="clothes"/>
           <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                <label htmlFor="type">clothes type</label>
                <select
                    name="type"
                    id="type"
                    onChange={handleChange}
                    className="form-control"    
                    value={type}
                >
                    {types}
                </select>
                </div>
                {/* end of select type */}
                {/* clothes price */}
                <div className="form-group">
                    <label htmlFor="price">clothes price: {price} VNĐ</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/* end of clothes price*/}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="sizeM"
                        id="sizeM"
                        checked={sizeM}
                        onChange={handleChange}
                        />
                        <label htmlFor="sizeM">size M</label>
                    </div>
                    
                    <div className="single-extra">
                        <input
                        type="checkbox"
                        name="sizeL"
                        checked={sizeL}
                        onChange={handleChange}
                        />
                        <label htmlFor="sizeM">size L</label>
                    </div>
                </div>
                {/* end of extras type */}
            </form>
        </section>
    );
};
export default ClothesFilter;
