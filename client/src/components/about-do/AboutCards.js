import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody, CardText, CardImg, CardTitle} from "reactstrap";

class AboutStack extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Container fluid={true} className="about-div">
          <Row className="justify-content-center">
            <Col lg="4" md="6" sm="12">
              <Card style={{border: "1px solid #191919"}} className="about-card">
                <CardImg className="full-stack-img" src="/images/web-dev.jpg"></CardImg>
                <CardBody className="text-center">
                  <CardTitle className="stack-title"><h4>Server Side Coding</h4></CardTitle>
                  <CardText> - APIs, NodeJs, ExpressJs and Golang</CardText>
                  <CardText> - Mongodb, MySQL and PostgreSQL</CardText>
                  <CardText> - Python and Bash Scripting For Automation</CardText>
                  <CardText> - Authentication (JWT) and Middleware Functionality </CardText>
                </CardBody>
              </Card>
            </Col> 
            <Col className="about-card-col" lg="4" md="6" sm="12">
              <Card style={{border: "1px solid #191919"}} className="about-card">
                <CardImg src={"/images/web-design.jpeg"}></CardImg>
                <CardBody className="text-center">
                  <CardTitle className="stack-title"><h4>Front End Development</h4></CardTitle>
                  <CardText> - HTML, CSS and Javascript</CardText>
                  <CardText> - JQuery, Bootstrap, ReactJS and Ejs</CardText>
                  <CardText> - Mobile First Development</CardText>
                  <CardText> - Interactive UI / UX Development </CardText>
                  <CardText> - React-Redux and Functional Dynamic Web Pages</CardText>
                </CardBody>
              </Card>
            </Col> 
            <Col className="about-card-col" lg="4" md="6" sm="12">
              <Card style={{border: "1px solid #191919"}} className="about-card">
                <CardImg src={"/images/security.png"}></CardImg>
                <CardBody className="text-center">
                  <CardTitle className="stack-title"><h4>Cyber-Security</h4></CardTitle>
                  <CardTitle> - Secure Server Architectures</CardTitle>
                  <CardText> - Security vulnerability researching</CardText>
                  <CardText> - Designing Secure Applications</CardText>
                  <CardText> - Cross-Site-Scripting Protection</CardText>
                  <CardText> - SQL Injection Testing and Prevention</CardText>
                </CardBody>
              </Card>
            </Col>       
          </Row>
        </Container>
      </Container>
    )
  }
}

export default AboutStack;
