import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../src/App.css'
import { connect } from 'react-redux'
import {  Nav,NavDropdown,Navbar,Media, Button } from 'react-bootstrap'

class Navigation extends Component {
  render(){
  return (
    // <nav>
    //     {/* <h3>Logo</h3> */}
    //     <ul className={'nav-links'}>
    //        <Link to="/">
    //         <li >Home</li>
    //         </Link>
    //         <Link to="/ourproduct">
    //         <li >Our Products</li>
    //         </Link>
    //         <Link to="/about">
    //         <li >About Us</li>
    //         </Link>
    //         <Link to="/shop">
    //         <li >Blogs</li>
    //         </Link>
    //         <Link to="/">
    //         <li >Whitepaper</li>
    //         </Link>
    //     </ul>
    // </nav>
     <div className="App"> 
     
    <Navbar fixed="top" className="bgimg" expand="lg">
        <Navbar.Brand href="#">Cure-daap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Distributor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Manufacturer</NavDropdown.Item>
              <NavDropdown.Item href="/patient">Patient</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pharmacy</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#">White Paper</Nav.Link>

          </Nav>
          <Button>Connect to wallet</Button>
        </Navbar.Collapse>
    </Navbar> 
</div>
  );
  }
}export default connect() (Navigation);