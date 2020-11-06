import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import FeaturedClothes from '../components/FeaturedClothes';

const mapStateToProps = (state)=> {
    return {
        items: state.items
    }
};

class New extends Component {
    render() {
        return (
            <div>
                
                <FeaturedClothes { ...this.props } />
                <Footer />
            </div>
        );
    };
}

export default connect(mapStateToProps)(New);
