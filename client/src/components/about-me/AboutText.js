import React, {Component} from "react";
import {Row, Col, Container} from "reactstrap";
import AboutMeList from "./AboutMeList";

class AboutText extends Component {
  render() {
    return (
      <Container fluid={true} className="section-2">
        <Container fluid={true}>
          <h1 className="text-center about-me-head text-white">About Me</h1>
          <Row className="justify-content-center">  
            <Col lg="5" sm="12" className="">
               <AboutMeList  />
            </Col>       
            <Col lg="5" sm="12">
              <div className="img-circular m-auto"></div>           
            </Col> 
          </Row>
        </Container>
      </Container>
    )
  }
}

export default AboutText;