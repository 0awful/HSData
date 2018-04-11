import React, { Component } from 'react';

/*
  This is the abstract base class of an object that can be rendered within the
  GraphDisplayBox.

  From this we can define global functions

  This object should not be used for rendering proper, it simply exists to allow
  for a global type that we can use in other situations.
*/

class GraphObject extends Component {
  state: {
    someState: 'State'
  };

  render() {
    return (
      <div className="GraphObject">
        <p>SomeGraph would display here</p>
      </div>
    );
  }
}

export default GraphObject;
