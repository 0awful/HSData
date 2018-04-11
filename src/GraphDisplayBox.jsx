import React from 'react';
import GraphObject from './GraphObject';
/*
  This is the display box. Any graph that is in the display state will display here. 

  Ideally this will allow drag and drop repositioning of the graph objects

  It will also allow a user to drag from the toolbar and drop into a position
  in the display box. 

  This box should be able to dynamically resize graph objects

*/

const GraphDisplayBox = () => (
  <div id="GraphDisplayBox">
    <GraphObject />
  </div>
);

export default GraphDisplayBox;
