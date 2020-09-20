import React, {Component} from "react";
import {
  Navbar,
  Nav,
  NavItem
} from "reactstrap";

class Social extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Nav className="social-links m-auto">
            <NavItem>
              <a className="nav-item nav-link" href="https://github.com/ronin010" >
                <img src="/images/git.png" height="55px" width="55px" alt="github" />
              </a>
            </NavItem> 
            <NavItem>
              <a className="nav-item nav-link" href="https://www.linkedin.com/in/jayden-harris-a38246190/" >
                <img src="/images/linkedin.png" height="60px" width="60px" alt="linkedin" />
              </a>
            </NavItem> 
            <NavItem>
              <a className="nav-item nav-link" href="https://stackoverflow.com">
                <img src="/images/stack.png" height="60px" width="75px" alt="stack-overflow" />
              </a>
            </NavItem>         
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Social;
