import React from 'react';

/*
This is a square card that should be of the style given by material-ui's paper 
class.

It should have a zDepth variable that would allow for a nice drop shadow.
It should have a radius variable for rounded corners.

Both of these should be passed into the object via props.

One prop should be an onClick function
One prop should be an id function

Ideally we have a way to drag and drop these from the toolbar into the displayDiv

*/

const GraphCard = () => (
  <div className="GraphCard">
    <p>We would have an image in this based upon the given props.</p>
  </div>
);

export default GraphCard;
