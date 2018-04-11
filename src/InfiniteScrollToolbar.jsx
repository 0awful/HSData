import React from 'react';

/*
  This is the infinite scroll toolbar
  This can run top to bottom or from left to right. This should be given in a
  setting for the item.
  
  It can contain any number of items. 

  When you reach the end of the items you will restart at the top of the items

  Ideally this will also save momentum so if you are on mobile 
  And you throw the scroll agressively it should loop through it multiple times
  Slowing over time. This is opposed to immediately stopping when the users
  Finger leaves the bar
*/

const InfiniteScrollToolbar = () => <div id="InfiniteScrollToolbar" />;

export default InfiniteScrollToolbar;
