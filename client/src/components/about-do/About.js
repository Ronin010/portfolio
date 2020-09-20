import React, {Component} from "react";
import AboutCards from "./AboutCards";
import {Container} from "reactstrap";

class About extends Component {
  render() {
    return (
      <Container className="section-3">
        <h1 className="about-text text-center ">What Do I Do?</h1>
        <br></br>
        <AboutCards />
      </Container>
    )
  }
}

export default About;