import React from 'react';

export function FragmentComponent() {
    return (
      <>
        Some text.
        <h2>A heading</h2>
        More text.
        <h2>Another heading</h2>
        Even more text.
      </>
     );
}

export const Template = 
`
export function FragmentComponent() {
    return (
      <>
        Some text.
        <h2>A heading</h2>
        More text.
        <h2>Another heading</h2>
        Even more text.
      </>
     );
}
`;