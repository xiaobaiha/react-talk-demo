import React from 'react';
import Demo from '..';
import {Welcome, Template} from './ClassTemplate';
export class ClassWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={Welcome}/>;
    }
}