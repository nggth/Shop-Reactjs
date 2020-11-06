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
                <article className="clotheslist align-cart">
                    <h5>You have ordered:</h5>
                    <div className="clotheslist-center">
                        {this.props.items.map(item => {
                            return (
                                <di className="cloth" key={item.id}>
                                    {/* <div className="img-container"> 
                                        <img src={item.images[0]} alt={item.name}/>
                                    </div> */}
                                    <p className="cloth-info">{item.name}</p>
                                    <div>
                                        {/* <scpan className="desc">{item.title}</scpan> */}
                                        <p>Price: {item.price}VND</p> 
                                        <p>Quantity: {item.quantity}
                                        </p>
                                        <div className="btn-remove">
                                            <div >
                                            <Link to="/cart"><button className="btn-font" onClick={() => {this.handleAddQuantity(item.id)}}> + </button></Link>
                                            <Link to="/cart"><button className="btn-font" onClick={() => {this.handleSubQuantity(item.id)}}> - </button></Link>
                                            </div>
                                            <button className="btn-remove" onClick={() => {this.handleRemove(item.id)}}>Remove</button>

                                        </div>
                                        {/* className="add-remove" */}
                                       
                                    </div>
                                </di>
                            )
                        })}
                    </div>
                </article>
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
            <div className="container">
                { addedItems }
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
