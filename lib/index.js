
'use strict';

// Exports
module.exports = function (hours) {

  // Needs to be an object
  if (typeof hours !== 'object') { return false; }

  // Open
  if (hours.open === undefined)  { return false; }
  if (hours.open === null)       { return false; }

  // Close
  if (hours.close === undefined) { return false; }
  if (hours.close === null)      { return false; }

  // Misc
  var hours_min = 0;
  var hours_max = 2359;
  if (hours.open  < hours_min)   { return false; }
  if (hours.close > hours_max)   { return false; }
  if (hours.open  > hours.close) { return false; }

  return true;

};
