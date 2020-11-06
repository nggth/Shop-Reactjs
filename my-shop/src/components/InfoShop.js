/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';

export default class InfoShop extends Component {

    render() {
        return (
            <section>
                <div class="w3-container" id="about">
                    <div class="w3-content">
                        <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">ABOUT THE CAFE</span></h5>
                        <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
                        <div class="w3-panel w3-leftbar w3-light-grey">
                        <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                        <p>Chef, Coffeeist and Owner: Liam Brown</p>
                        </div>
                        
                        <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
                        <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
                    </div>
                </div>

                
                {/* <!-- Menu Container --> */}
                <div>
                    <h5>Bread Basket</h5>
                    <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                    
                    <h5>Honey Almond Granola with Fruits</h5>
                    <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                    
                    <h5>Belgian Waffle</h5>
                    <p>Vanilla flavored batter with malted flour 7.50</p>
                    
                    <h5>Scrambled eggs</h5>
                    <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                    
                    <h5>Blueberry Pancakes</h5>
                    <p>With syrup, butter and lots of berries 8.50</p>
                    <h5>Coffee</h5>
                    <p>Regular coffee 2.50</p>
                    
                    <h5>Chocolato</h5>
                    <p>Chocolate espresso with milk 4.50</p>
                    
                    <h5>Corretto</h5>
                    <p>Whiskey and coffee 5.00</p>
                    
                    <h5>Iced tea</h5>
                    <p>Hot tea, except not hot 3.00</p>
                    
                    <h5>Soda</h5>
                    <p>Coke, Sprite, Fanta, etc. 2.50</p>
                </div>
            </section>
        );
    }
    
}
