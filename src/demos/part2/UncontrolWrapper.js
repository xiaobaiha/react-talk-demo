import React from 'react';
import Demo from '../';
import { Uncontrol, Template } from './UncontrolTemplate';

export class UncontrolWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={Uncontrol}/>;
    }
}