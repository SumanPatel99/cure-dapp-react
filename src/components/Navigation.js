import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../src/App.css'
import { connect } from 'react-redux'

class Navigation extends Component {
  render(){
  return (
    <nav>
        <h3>Logo</h3>
        <ul className={'nav-links'}>
           <Link to="/">
            <li >Home</li>
            </Link>
            <Link to="/about">
            <li >About</li>
            </Link>
            <Link to="/shop">
            <li >Shop</li>
            </Link>
        </ul>
    </nav>
  );
  }
}export default connect() (Navigation);