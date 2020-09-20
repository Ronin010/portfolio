import React, {Component} from "react";
import ScrollTo from "react-scroll-into-view";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";


class AppNavBar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <>
      <Navbar sticky="top" light className="bg-dark nav-top" expand="sm">
        <NavbarBrand className="ml-5 text-muted"><h2 className="text-white">{this.props.page}</h2></NavbarBrand>
        <NavbarToggler className="ml-auto navbar-dark" onClick={this.toggle}></NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto mr-5" navbar>
            <ScrollTo selector={".section-1"}>
              <NavItem>
                <NavLink className="nav-button home-button"><h4 className="text-white home-link-text">Home</h4></NavLink>
              </NavItem>
            </ScrollTo>
            <ScrollTo selector={".section-2"}>
              <NavItem>
                <NavLink className="nav-button"><h4 className="text-white">About</h4></NavLink>
              </NavItem>
            </ScrollTo>
            <NavItem>
              <NavLink className="nav-button h4 projects-link text-white" href="/projects">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </>
    )
  }
}

export default AppNavBar;
