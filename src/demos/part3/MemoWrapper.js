import React from 'react';
import Demo from '..';
import MemoComponent, { Template } from './MemoTemplate';

export class MemoWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={MemoComponent}/>;
    }
}