import React,{ Component} from 'react'
import {Card, Col, Row, InputGroup, Formcontrol, Media,FormControl} from 'react-bootstrap'
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
            <Col>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="images/page.jpg" />
                <Card.Body>
                <Row>
                   <Col xs lg="3">
                     <Media>
                       <img 
                       width={40}
                       height={40}
                       src="images/page.jpg"
                       />
                     </Media>
                   </Col>
                   <Col xs lg="9">
                    <InputGroup>
                      {/* <InputGroup.Prepend>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                      </InputGroup.Prepend> */}
                      <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                   </Col>
                 </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="images/page.jpg" />
                <Card.Body>
                 <Row>
                   <Col xs lg="3">
                     <Media>
                       <img 
                       width={40}
                       height={40}
                       src="images/page.jpg"
                       />
                     </Media>
                   </Col>
                   <Col xs lg="9">
                    <InputGroup>
                      {/* <InputGroup.Prepend>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                      </InputGroup.Prepend> */}
                      <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                   </Col>
                 </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="images/page.jpg" />
                <Card.Body>
                <Row>
                   <Col xs lg="3">
                     <Media>
                       <img 
                       width={40}
                       height={40}
                       src="images/page.jpg"
                       />
                     </Media>
                   </Col>
                   <Col xs lg="9">
                    <InputGroup>
                      {/* <InputGroup.Prepend>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                      </InputGroup.Prepend> */}
                      <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                   </Col>
                 </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row><br/><br/>
            </div>
        )
    }
}

export default connect()(findMore);