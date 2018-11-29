import React from 'react';
import { Link } from "react-router-dom";
import appRoutes from './routes/app';
import { Router, Route, Switch } from "react-router-dom";

const switchRoutes = (
  <Switch>
      {appRoutes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key}/>)}
  </Switch>
);

function App() {
  return <div>
    <div className="flex flex-verticle pin-left pad1 keyline-right" style={{width: 200}}>
      <h3>Part 1：React</h3>
      <Link to="/function">Function</Link>
      <Link to="/class">Class</Link>
      <h3>Part 2：LIFE CIRCLE</h3>
      <Link to="/getDerivedStateFromProps">getDerivedStateFromProps</Link>
      <Link to="/getSnapshotBeforeUpdate">getSnapshotBeforeUpdate</Link>
    </div>
    <div className="pin-right pad1" style={{left: 200}}>
      {switchRoutes}
    </div>
  </div>;
  
}

export default App;
