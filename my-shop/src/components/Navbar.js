import React, { Component } from 'react';
import logo from '../images/logo.jpg'
import {FaAlignRight} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'

import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        isOpen:false
    };
    handleToggle = () =>{
        this.setState({ isOpen: !this.state.isOpen});
    };
    render() {
        return (
        <nav className="navbar">
            <div className="nav-center">
                {/* Button home */}
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Cecilia"/>
                    </Link>
                    <button
                        type="button"
                        className="nav-btn"
                        onClick={this.handleToggle}
                    >
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                
                
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links" }>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/clothes">Clothes</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li id="cart-right">
                        {/* Button cart */}
                        <Link to="/cart">
                            <FaShoppingCart className="nav-icon"/>
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                        </button>
                    </li>
                </ul>
                    
                    
                
            </div>
        </nav>
    );
    }
}
