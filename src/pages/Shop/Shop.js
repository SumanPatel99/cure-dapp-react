import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

class Shop extends Component {
 render(){
  return (
    <div >
     <h1>Shop Page</h1>
     <ul>
         <Link to={'/shop/1'}>
         <li>One</li>
         </Link>
         <Link to={'/shop/2'}>
         <li>Two</li>
         </Link>
     </ul>
    </div>
  );
 }
}export default connect()(Shop);