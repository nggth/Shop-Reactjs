import React from 'react';
import './App.css';

import Home  from "./pages/Home";
import Clothes  from "./pages/Clothes";
import SingleClothes  from "./pages/SingleClothes";
import Error  from "./pages/Error";
import Navbar from "./components/Navbar"; 
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/clothes" component={Clothes}/>
      <Route exact path="/clothes/:slug" component={SingleClothes}/>
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
