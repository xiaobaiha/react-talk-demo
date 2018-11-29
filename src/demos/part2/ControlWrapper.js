import React from 'react';
import Demo from '../';
import { Control, Template } from './ControlTemplate';

export class ControlWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={Control}/>;
    }
}