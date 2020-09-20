import React, {Component} from "react";
import {ListGroup, ListGroupItem, Container, Button} from "reactstrap";
import ScrollTo from "react-scroll-into-view";

class AboutMeList extends Component {
  render() {
    return (
      <Container className="about-list-container">
        <h1 className="text-center who-text text-white">Who Am I?</h1>
        <ListGroup className="text-center text-muted about-list">
          <ListGroupItem style={{backgroundColor: "#191919", border: "none"}} className="about-list-text text-white">
            <h5>I am a full stack web developer capable of building applications using a variety of technologies.</h5>
          </ListGroupItem>
          <ListGroupItem style={{backgroundColor: "#191919", border: "none"}} className="about-list-text text-white">
            <h5>I am a self-taught guitar player that has been playing for around 5 years.</h5>
          </ListGroupItem>
          <ListGroupItem style={{backgroundColor: "#191919", border: "none"}} className="about-list-text text-white">
            <h5>As well as being a keen programmer, I am also a cyber-security enthusiast and enjoy working with security when building applications.</h5>
          </ListGroupItem>
          <ListGroupItem style={{backgroundColor: "#191919", border: "none"}} className="about-list-text text-white">
            <h5>I often spend a lot of my free time working on my coding skills and enjoy learning as much as I can to further my abilities.</h5>
          </ListGroupItem>
          <ListGroupItem style={{backgroundColor: "#191919", border: "none", cursor: "pointer", width: "70px", margin: "auto"}} className="about-list-text text-white">
            <ScrollTo selector={".section-3"}>
            <h1 style={{rotate: "90deg", fontSize: "100px", color: "orange"}}>&#187;</h1>
            </ScrollTo>
          </ListGroupItem>
        </ListGroup>
      </Container>
    )
  }
}

export default AboutMeList;
