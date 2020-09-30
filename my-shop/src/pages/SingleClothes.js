import React, { Component } from 'react';
import defaultBcg from '../images/pic1.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ClothContext} from '../context';

export default class SingleClothes extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = ClothContext;
    //componentDidMount(){}
    render() {
        const {getCloth} = this.context;
        const cloth = getCloth(this.state.slug);
        if (!cloth) {
            return (
                <div className="error">
                    <h3>No such Clothes could be found...</h3>
                    <Link to="/clothes" className="btn-primary">
                        Back to Clothes
                    </Link>
                </div>
            );
        }
        const {name,description,capacity,size,prize,extras,breakfast,pets,images} = cloth
        return (
            <Hero hero='clothesHero'>
                <Banner tittle={`${name} cloth`}>
                    <Link to="/clothes" className="btn-primary">
                        Back to Clothes
                    </Link>
                </Banner>
            </Hero>
        );
    }
}
