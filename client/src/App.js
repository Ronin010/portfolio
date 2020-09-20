import React, {Component} from 'react';
import './App.css';
import IndexPage from "./components/IndexPage";
import Projects from "./components/projects/Projects";
import {Route} from "react-router-dom";
import FadeIn from "react-fade-in";

class App extends Component {
  render() {
    return (
      <FadeIn>
        <div className="App">
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </FadeIn>
    );
  }
}

export default App;
