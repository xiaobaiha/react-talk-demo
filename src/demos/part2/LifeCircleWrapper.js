import React from 'react';
import Demo from '..';
import {LifeCircle, Template} from './LifeCircleTemplate';
export class LifeCircleWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={LifeCircle}/>;
    }
}