import React, { Component } from 'react';
import defaultImg1 from '../images/about.jpg';
import defaultImg2 from '../images/about2.jpg';



class Slider extends Component {

    render() {
        return (
            <div>
                 <h3 className="section-title">Discover the latest collections from Dottie Premium now!</h3>
                <section id="about">
                    <div class="container1">
                        <div class="row1">
                            <div class="column">
                            <img style={{width:'80%', marginLeft: '35%'}} src={defaultImg1} alt="fireSpot"/>
                            </div>
                            <div class="column1">
                                <div action="/action_page.php">
                                <h6>Where to find women's clothing?</h6>   
                                <p> Shopping is at the top of the list. Find women's clothing at Express; from dresses and jumpsuits, to jeans and dress pants, update your wardrobe all in one place.</p>
                                <br></br>
                                <h6>What's trending in women's fashion? </h6>
                                <p>Looking for women's clothing trends? Make sure you're shopping the most recent new arrivals at Express. Check out our women's fashion blog for more stories on the best clothing trends.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row1">
                            <div class="column2">
                                <div action="/action_page.php">
                                    <h6>Where to find women's clothing?</h6>   
                                    <p> Shopping is at the top of the list. Find women's clothing at Express; from dresses and jumpsuits, to jeans and dress pants, update your wardrobe all in one place.</p>
                                    <br></br>
                                    <h6>What's trending in women's fashion? </h6>
                                    <p>Looking for women's clothing trends? Make sure you're shopping the most recent new arrivals at Express. Check out our women's fashion blog for more stories on the best clothing trends.</p>
                                    </div>
                                </div>
                            <div class="column">
                            <img style={{width:'80%'}} src={defaultImg2} alt="fireSpot"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    
}
export default Slider;
