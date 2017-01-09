import React, { Component } from 'react';

import Header from './Header';
import GroovyInputs from './Inputs';
import GroovyOutputs from './Output';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      version: 2.1
    }
  }

  updateState(key, value) {
    let obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="groovy-meta">
        <Header version={this.state.version} />
        <div className="body">
          <GroovyInputs updateState={this.updateState.bind(this)} />
          <GroovyOutputs metadata={this.state} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
