import React from 'react';
import Demo from '..';
import { FragmentComponent, Template } from './FragmentTemplate';

export class FragmentWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={FragmentComponent}/>;
    }
}