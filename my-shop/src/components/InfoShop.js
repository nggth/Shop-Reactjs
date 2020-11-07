import React, {Component} from 'react';
import defaultImg from '../images/slide.jpg';
import Title from './Title';


class InfoShop extends Component {
    render() {
        return (
            <div>
                 <h3 className="section-title">Discover the latest collections from Dottie Premium now!</h3>
                <section id="about">
                    <div class="container1">
                        <div class="row1">
                            <div class="column">
                            <img style={{width:'80%', marginLeft: '19%'}} src={defaultImg} alt="fireSpot"/>
                            </div>
                            <div class="column">
                                <div action="/action_page.php">
                                <p>     Shop for women's clothing at Express. Get a wardrobe refresh with cute women's clothes for your work, weekend, and night-out needs. Whether you're looking for women's clothing stores, the top styles at always at Express.</p>
                                <br></br>
                                <h6>Where to find women's clothing?</h6>   
                                <p> Find women's clothing at Express; from dresses and jumpsuits, to jeans and dress pants, update your wardrobe all in one place.</p>
                                <br></br>
                                <h6>What's trending in women's fashion? </h6>
                                <p>Looking for women's clothing trends? Make sure you're shopping the most recent new arrivals at Express. Check out our women's fashion blog for more stories on the best clothing trends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
           
        )}}
export default InfoShop;
