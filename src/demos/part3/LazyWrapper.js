import React from 'react';
import Demo from '..';
import { LazyComponent, Template } from './LazyTemplate';

export class LazyWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={LazyComponent}/>;
    }
}