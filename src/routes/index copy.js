import React from 'react';
import '../App.css';
import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import Nav from '../components/Navigation'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop';
import About from '../pages/About/About'
import ItemDetails from '../pages/ItemDetails/ItemDetails'

function Index() {
  return (
    <Router>
    <div >
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/:id" component={ItemDetails} />
      </Switch>
    </div>
    </Router>
  );
}export default Index;
