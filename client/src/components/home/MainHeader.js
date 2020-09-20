import React, {Component} from "react";
import Social from "./Social";

class MainHeader extends Component {
  render() {
    return (
      <Container-fluid>
        <Jumbotron-fluid className="jumbotron-main col-sm-12 text-white text-center" fluid>
          <Container-fluid className="text-center">
            <h2 className="display-3 text-center text-white jumbo-head">JAYDEN HARRIS</h2>
            <h3 className="text-center text-white">Full Stack Engineering</h3>
            <Social  />
          </Container-fluid>
        </Jumbotron-fluid>
      </Container-fluid>     
    )
  }
}

export default MainHeader;
