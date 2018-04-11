import React from 'react';
import InfiniteScrollToolbar from './InfiniteScrollToolbar';
import GraphCard from './GraphCard';
/* 
This is the sidebar object. 
This will be aligned left

This object will contain an infinite scroll of square cards called scroll cards

These scroll cards will allow users to define the GUI of the page to fit their
desired data display.
*/

const SideBar = () => (
  <InfiniteScrollToolbar>
    <GraphCard />
    <GraphCard />
    <GraphCard />
    <GraphCard />
    <GraphCard />
    <GraphCard />
  </InfiniteScrollToolbar>
);

export default SideBar;
