import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedClothes from '../components/FeaturedClothes';

const home = () => {
    return (
    <>
        <Hero>
            <Banner title="NEW ARRIVALS" subtitle="A day with bestie">
            <Link to='/clothes' className="btn-primary">
                our clothes
            </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedClothes />
        <Footer/>
    </>
    );
};

export default home;
