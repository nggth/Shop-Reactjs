import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

import FeaturedClothes from '../components/FeaturedClothes';

const mapStateToProps = (state)=> {
    return {
        items: state.items
    }
};

class Home extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner title="NEW ARRIVALS" subtitle="A day with bestie">
                        <Link to='/clothes' className="btn-primary">
                            our clothes
                        </Link>
                    </Banner>
                </Hero>
                <Services />
                <FeaturedClothes { ...this.props } />
                <Footer />
            </div>
        );
    };
}

export default connect(mapStateToProps)(Home);
