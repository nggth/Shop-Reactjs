import React from 'react'
import Title from './Title';
import { ClothObj } from '../commons/constants';

/**
 * [Unique item list]
 * @param  {[Array]} items [Item List]
 * @param  {[String]} uniqueKey [Unique key]
 * @return {[Array]}
 */
const uniqueItems = (items, uniqueKey) => {
    return [...new Set(items.map(item => item[uniqueKey]))];
};

/**
 * [generateOptionTypes Generate option element]
 * @return {[Element]}
 */
const generateOptionTypes = (types) => {
    const options = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>;
    });

    return options;
};

const ClothesFilter = ({ ...props }) => {
    let state = props.state,
        types = uniqueItems(props.items, 'type');
    types = [ClothObj.type, ...types];

    const onHandleChange = (e) => {
        const target = e.target,
            name = target.name,
            value = target.type === 'checkbox' ? target.checked : target.value;
            

        let filterClothes = [...state.items];
        // Filter by type
        if (name === 'type') {
            if (value !== 'all') {
                filterClothes = filterClothes.filter(cloth => cloth.type === value);
            }
        }

        // Filter by price
        if (name === 'price') {
            filterClothes = filterClothes.filter(cloth => cloth.price <= Number(value));
        }

        // Filter by size
        if (name === 'sizeM') {
            filterClothes = filterClothes.filter(cloth => cloth.sizeM === true);
        }

        if (name === 'sizeL') {
            filterClothes = filterClothes.filter(cloth => cloth.sizeL === true);
        }

        props.setState({
            [name]: value,
            filterClothes: filterClothes
        });
    };

    return (
        <section className="filter-container">
            <Title title="clothes" />
            <div className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">clothes type</label>
                    <select
                        name="type"
                        id="type"
                        className="form-control"
                        value={state.type}
                        onChange={onHandleChange}
                    >
                        {generateOptionTypes(types)}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">clothes price: {state.price} VNĐ</label>
                    <input
                        type="range"
                        name="price"
                        min={state.minPrice}
                        max={state.maxPrice}
                        id="price"
                        value={state.price}
                        className="form-control"
                        onChange={onHandleChange}
                    />
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="sizeM"
                            id="sizeM"
                            checked={state.sizeM}
                            onChange={onHandleChange}
                        />
                        <label htmlFor="sizeM">size M</label>
                        <div className="single-extra">
                        <input
                            type="checkbox"
                            name="sizeL"
                            checked={state.sizeL}
                            onChange={onHandleChange}
                        />
                        <label htmlFor="sizeM">size L</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClothesFilter;
