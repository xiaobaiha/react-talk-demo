import React from 'react';
import { Link } from "react-router-dom";
import appRoutes from './routes/app';
import { Route, Switch } from "react-router-dom";

const switchRoutes = (
  <Switch>
      {appRoutes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key}/>)}
  </Switch>
);

function App() {
  return <div>
    <div className="flex flex-verticle pin-left pad1 keyline-right" style={{width: 200}}>
      <h3>Part 1：React</h3>
      <Link className="pad-5y" to="/function">Function</Link>
      <Link className="pad-5y" to="/class">Class</Link>
      <h3>Part 2：LIFE CIRCLE</h3>
      <Link className="pad-5y" to="/lifecircle">LifeCircle</Link>
      <Link className="pad-5y" to="/uncontrol">Uncontrolled Components</Link>
      <Link className="pad-5y" to="/control">Controlled Components</Link>
      <h4>Part 3: New Features</h4>
      <Link className="pad-5y" to="/memo">Memo</Link>
      <Link className="pad-5y" to="/lazy">Lazy</Link>
      <Link className="pad-5y" to="/fragment">Fragment</Link>
      {/* <Link className="pad-5y" to="/portal">Portal</Link> */}
    </div>
    <div className="pin-right pad1" style={{left: 200}}>
      {switchRoutes}
    </div>
  </div>;
  
}

export default App;
