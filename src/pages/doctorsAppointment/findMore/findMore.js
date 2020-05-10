import React,{ Component} from 'react'
import {Card, Col, Row, InputGroup, Button, Media,FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'

class findMore extends Component{
    render(){
        return(
            <div className="findmorediv">
                <Row>
                    <Col xl="3" lg="3">
                        <input type="search" placeholder="location" />
                    </Col>
                    <Col xl="9" lg="9">
                        <input type="search" placeholder="search for doctor" />
                    </Col>
                </Row>
                <Row>
                  <Col className="docdetail">
                    <Row>
                      <Col xl="3" lg="3">
                        hello
                      </Col>
                      <Col xl="9" lg="9">
                        hello
                      </Col>
                    </Row>
                  </Col>
                  <Col className="docdetail">
                    <Row>
                      <Col xl="3" lg="3">
                        <Media>
                          <img src="images/page.jpg" className="docprofile" />
                        </Media>
                      </Col>
                      <Col xl="9" lg="9">
                        <h2>Name</h2>
                        <p>1 Doctor</p>
                        <p>ES 500 onwards</p>
                        <p>500 Feedbacks</p>
                        <Row>
                          <Col>
                            <Media>
                              <img 
                                src="images/page.jpg"
                                width={64}
                                height={64}
                                className="mr-3"

                              />
                            </Media>
                          </Col>
                          <Col>
                            <Media>
                              <img 
                                src="images/page.jpg"
                                width={64}
                                height={64}
                                className="mr-3"
                              />
                            </Media>
                          </Col>
                          <Col>
                            <Media>
                              <img 
                                src="images/page.jpg"
                                width={64}
                                height={64}
                                className="mr-3"
                              />
                            </Media>
                          </Col>
                        </Row>
                        <Row>
                          <Button>Treatment</Button>
                          <Button>Treatment</Button>
                          <Button>Treatment</Button>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="docdetail">
                    <Row>
                      <Col xl="3" lg="3"></Col>
                      <Col xl="9" lg="9"></Col>
                    </Row>
                  </Col>
                </Row>
               <br/><br/>
            </div>
        )
    }
}

export default connect()(findMore);