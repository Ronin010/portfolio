import React, {Component} from "react";
import { Navbar, NavbarBrand} from "reactstrap";

class ProjectsNav extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <Navbar sticky="top" light className="projects-nav bg-dark nav-top" expand="sm">
        <NavbarBrand className="mt-2 text-white text-center h2" href="/">{"< Home"}</NavbarBrand>
      </Navbar>
    )
  }
}

export default ProjectsNav;
