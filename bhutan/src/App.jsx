import React from "react";
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Index from "./router/Home"
import Results from "./router/Results"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/results" component={Results} />
        </Switch>
    </Router>
  );
}