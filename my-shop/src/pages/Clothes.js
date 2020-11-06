import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClothObj } from '../commons/constants';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import ClothesList from '../components/ClothesList';
import ClothesFilter from '../components/ClothesFilter';
import { addToCart } from '../components/Cart/CartActions';
import Footer from '../components/Footer';

const mapStateToProps = (state)=> {
    return {
        items: state.items
    }
};

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    };
};

class Clothes extends Component {
    constructor(props) {
        super(props);

        this.maxPrice = Math.max(...props.items.map(item => item.price));

        this.state = {
            items: props.items,
            type: ClothObj.type,
            price: this.maxPrice,
            minPrice: ClothObj.minPrice,
            maxPrice: this.maxPrice,
            sizeM: ClothObj.sizeM,
            sizeL: ClothObj.sizeL,
            filterClothes: props.items
        };

        this.setState = this.setState.bind(this);
    }

    render() {
        return (
            <div>
                <Hero hero="clothesHero">
                    <Banner title="Our Clothes" subtitle="A day with bestie">
                        <Link to='/' className="btn-primary">
                                our clothes
                        </Link>
                    </Banner>
                </Hero>
                    <ClothesFilter { ...this.props } state={this.state} setState={this.setState} />
                    <ClothesList { ...this.props } clothes={this.state.filterClothes} />
                
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clothes);
