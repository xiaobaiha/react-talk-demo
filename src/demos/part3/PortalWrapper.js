import React from 'react';
import Demo from '..';
import { PortalParent, Template } from './PortalTemplate';

export class PortalWrapper extends React.Component {
    render() {
      return <Demo code={Template} mode="javascript" component={PortalParent}/>;
    }
}