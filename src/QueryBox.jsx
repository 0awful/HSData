import React from 'react';

/*
  This is object via which people define the data

  This is going to be a form or selection box that is defined based off of the
  data schema of the API. This should also be a buildable object that is given
  in an import

  From this we can define how many of what label and selection options we have to
  best query the data

  The dynamic allocation would be nice, but not required we can hardwire this. 

  It is more reusable if this is not the case.

  Props should include an onSearchButton click function
  Props should also include a variety of styling attributes. 

*/

const QueryBox = () => (
  <div id="QueryBox">
    <p>This should be a viable form field</p>
  </div>
);

export default QueryBox;
