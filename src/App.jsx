import React, { Component } from 'react';
import './App.css';
import GraphDisplayBox from './GraphDisplayBox';
import QueryBox from './QueryBox';
import SideBar from './SideBar';

/* eslint-disable */
class App extends Component {
  /* eslint-enable */

  render() {
    return (
      <div className="App">
        <SideBar />
        <QueryBox />
        <GraphDisplayBox />
      </div>
    );
  }
}

export default App;
