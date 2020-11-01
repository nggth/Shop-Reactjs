import React, { Component } from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
//import {Link} from 'react-router-dom'
import ClothesContainer from '../components/ClothesContainer';

export default class Clothes extends Component {
    render() {
        return (
            <>
                <Hero hero="clothesHero">
                    <Banner title='Our Clothes'>
                        {/* <Link to='/' className="btn-primary">
                        return home
                    </Link> */}
                    </Banner>
                </Hero>
                <ClothesContainer />
            </>
        )
    }
}
