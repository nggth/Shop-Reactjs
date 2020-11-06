import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import {
    removeItem,
    addQuantity,
    subQuantity
} from '../components/Cart/CartActions';
import Recipe from '../components/Cart/Recipe';
import Footer from '../components/Footer';

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    };
};

// const itemCount = (state) => {
//     itemCount = state.products.reduce((quantity, product) => {
//         return quantity + +product.quantity;
//     }
// };

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subQuantity: (id) => {dispatch(subQuantity(id))}
    };
};

class Cart extends Component {
    handleRemove(id) {
        this.props.removeItem(id);
    };

    handleAddQuantity(id) {
        this.props.addQuantity(id);
    };

    handleSubQuantity(id) {
        this.props.subQuantity(id);
    };

    render() {
        let addedItems = this.props.items.length ?
        (
            <div>
                <Title title="Cart" />
                <section>
                    <ul className="products img-container-cart">
                    {this.props.items.map(item => {
                         return (
                            <li className="row" key={item.id}>
                                <div className="col left">
                                    <div className="thumbnail">
                                    <img src={item.images[0]} alt={item.name}/>
                                    </div>
                                    <div className="detail">
                                        <div className="name">{item.name}</div>
                                        <div className="price">{item.price} VNĐ</div>
                                    </div>
                                </div>

                                <div className="col right">
                                    <div className="quantity">
                                        <p>Quantity: {item.quantity}</p>
                                        <div className="btn-group">
                                            <Link to="/cart"><button id="btn-add" onClick={() => {this.handleAddQuantity(item.id)}}> + </button></Link>
                                            <Link to="/cart"><button id="btn-sub" onClick={() => {this.handleSubQuantity(item.id)}}> - </button></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="remove">
                                    <svg
                                        onClick={() => {this.handleRemove(item.id)}}
                                        version="1.1"
                                        className="close"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 60 60"
                                        enableBackground="new 0 0 60 60"
                                    >
                                        <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                                    </svg>
                                </div>
                            </li>
                         )
                    })}
                    </ul>
                </section>
                <Recipe />
            </div>
        ) : (
            <Hero>
                <Banner title='Cart'>
                    <p>No items in the carts</p>
                    <Link to='/clothes' className="btn-primary">
                        our clothes
                    </Link>
                </Banner>
            </Hero>
        );

        return (
            <div>
                { addedItems }
                {/* <Footer /> */}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
