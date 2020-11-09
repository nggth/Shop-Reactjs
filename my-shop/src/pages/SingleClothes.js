import React, { Component } from 'react';
import defaultBcg from '../images/pic1.jpg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';
import { connect } from 'react-redux';

const mapStateToProps = (state)=> {
    return {
        items: state.items
    }
};

class SingleClothes  extends Component {
    render() {
        const cloth = this.props.items.find(cloth => cloth.slug === this.props.match.params.slug);

        if (!cloth) {
            return (
                <div className="error">
                    <h3> no such clothes could be found...</h3>
                    <Link to="/clothes" className="btn-primary">
                        back to clothes
                    </Link>
                </div>
            );
        }

        return (
            <div>
                <StyledHero img={cloth.images[0] || defaultBcg}>
                    <Banner title={`${cloth.name}`}>
                        <Link to="/clothes" className="btn-primary">
                            back to clothes
                        </Link>
                    </Banner>
                </StyledHero>

                <section className="single-cloth">
                    <div className="single-cloth-images">
                        {cloth.images.map((item, index) => (
                            <img key={index} src={item} alt={cloth.name} />
                        ))}
                    </div>
                    <div className="single-cloth-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{cloth.description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : {cloth.price}</h6>
                            <h6>{cloth.sizeM ? "have size M" : "no have size M"}</h6>
                            <h6>{cloth.sizeL ? "have size L" : "no have size L"}</h6>
                        </article>
                    </div>
                </section>
                
                <section className="cloth-extras">
                    <h6>extras </h6>
                    <ul className="extras">
                        {cloth.extras.map((item, index) => (
                            <li key={index}> - {item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SingleClothes);
