import React , {Component} from 'react';
import './App.css';
import Index from './routes/index'
import { connect } from 'react-redux'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Index />
    </div>
  );
  }
}export default connect() (App);
