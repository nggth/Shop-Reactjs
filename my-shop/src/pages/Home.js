import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services';
import FeatureClothes from '../components/FeaturedClothes';
import Button from '../components/StyledHero';


export default function Home() {
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
        <FeatureClothes />
        <Button/>
    </>
    );
}
