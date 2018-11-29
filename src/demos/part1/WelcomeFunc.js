import React from 'react';
import Demo from '../';
import {Welcome, Template} from './FunctionTemplate';

export class WelcomeFunc extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={Welcome}/>;
    }
}