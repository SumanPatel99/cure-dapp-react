import React , {Component} from 'react';
import { connect } from 'react-redux'

class ItemDetails extends Component {
  render(){
  return (
    <div >
     <h1>Shop Page</h1>
     <ul>
         <li>Item 1</li>
         <li>Item 2</li>
     </ul>
    </div>
  );
  }
}export default connect()(ItemDetails);