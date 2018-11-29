import React, { memo } from 'react';

// like React.PureComponent if you were writing a class
function Button(props) {
  // Component code
  return <button>pure</button>
}

export default memo(Button);

export const Template = 
`
/*
 * React.memo lets you memoize the render output from any component (e.g. a function component), 
 * and bail out of unnecessary updates. It is an optimization, similar to how you'd use 
 * React.PureComponent if you were writing a class.
 */
function Button(props) {
  // Component code
  return <button>pure</button>
}

export default memo(Button);
`;