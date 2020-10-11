import React, { Component } from 'react';
import defaultBcg from '../images/pic1.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { ClothesContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleClothes extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        slug: this.props.match.params.slug,
        defaultBcg: defaultBcg
      };
    }
    static contextType = ClothesContext;
  
    // componentDidMount() {s
    //   console.log(this.props);
    // }
    render() {
      const { getCloth } = this.context;
      const cloth = getCloth(this.state.slug);
  
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
      const {
        name,
        description,
        size,
        price,
        extras,
        images
      } = cloth;
      const [main, ...defaultImages] = images;
      console.log(defaultImages);
  
      return (
        <>
          <StyledHero img={images[0] || this.state.defaultBcg}>
            <Banner title={`${name} cloth`}>
              <Link to="/clothes" className="btn-primary">
                back to clothes
              </Link>
            </Banner>
          </StyledHero>
          <section className="single-cloth">
            <div className="single-cloth-images">
              {defaultImages.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))}
            </div>
            <div className="single-cloth-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>price : {price}</h6>
                <h6>size : {size} SQFT</h6>
              </article>
            </div>
          </section>
          <section className="cloth-extras">
            <h6>extras </h6>
            <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </section>
        </>
      );
    }
  }


