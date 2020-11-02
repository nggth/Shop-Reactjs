import React, { Component } from 'react';
import './App.css';

import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Cart from "./pages/Cart";
import About from "./pages/About";

import SingleClothes from "./pages/SingleClothes";

import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Route, Switch } from 'react-router-dom';
import data from './data';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clothes">
            <Clothes data={this.state.data}/>
          </Route>
          <Route exact path="/clothes/:slug" component={SingleClothes} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          
          <Route component={Error} />
        </Switch>
      </>
    )
  }
}

