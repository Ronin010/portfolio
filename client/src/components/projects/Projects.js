import React, {Component} from "react";
import ProjectCard from "./ProjectCard";
import {Container, Row, Col, Spinner} from "reactstrap";
import ProjectsNav from "./ProjectsNav";
import FadeIn from "react-fade-in"
import {ProjectsData} from "./ProjectsData";

class Projects extends Component {
  state = {
    isLoading: true,
    projects: ProjectsData
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  render() {
    // return a spinner while the projects load
    if (this.state.isLoading) {
      return (
        <FadeIn>
          <div>
            <ProjectsNav page="Projects" />
            <div className="d-flex justify-content-center">
            <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
            </div>
            <div className="text-center mt-5 ml-auto mr-auto h3"><p className="loading h3">Loading</p></div>
          </div>
        </FadeIn>
      )
    } else {
       return (
         <>
          <ProjectsNav page="Projects" />
          <Container style={{color: "#343a40"}} className="text-center h3 mb-5"> My Projects </Container>
          <Container>
						<Row>
                {this.state.projects.map((project) => {
                  return (
                    <Col lg="4" md="6" sm="12">
                      <ProjectCard tech={project.techUsed} title={project.title} img={project.image} desc={project.description} demo={project.demo} repo={project.repo} />	
                    </Col>
                  )
                })}
						</Row>
					</Container>
        </>
      )
    }
  }
}

export default Projects;
