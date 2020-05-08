import React,{Component} from 'react'
import {connect} from 'react-redux'
import{ Media, Col, Row, Button, InputGroup, FormControl,Container } from 'react-bootstrap'
import  '../../App.css';
 

class Home extends Component{
    render(){
        return(
            <div className="maindiv patientrow">
                {/* <header> */}
                    <Media>
                        <img className="navimg" src="images/woman-discussing-a-lesson-3758869.jpg" />
                    </Media>
                    <div className="patientdiv">
                    <Row>
                        <Col xl lg="9">
                            <h4>Find and Book</h4>
                        </Col>
                        <Col xl lg="3">
                        <p>Location</p>
                        <select>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                        </select>
                        </Col>
                    </Row>
                    <Row>
                        <input type="text" placeholder="Search doctors, Specialities, Clinics, Hospitals"/ >
                            <label>
                                Search by Specialist<br/>
                            </label>
                    </Row>
                    <Row className="boximg">
                        <Col>
                        <div>
                            <img src="images/ribbon.png" className="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/mother.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/bone.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/tooth.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                    </Row>
                    <Row className="boximg">
                        <Col>
                        <div>
                            <img src="images/mask.png" className="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/eye-care.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/doctor.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/mental-health.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button>
                            <a href="/step1a">Looking for more ?</a>
                        </Button>
                        </Col>
                    </Row>
                    </div>
                   
            </div>

        )
    }
}

export default connect()(Home);