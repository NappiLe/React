import "./App.css";

import React from "react";
import { Switch } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Calendar from "./components/Calendar";
import CustomerList from "./components/CustomerList";
import { Home } from "./components/Home";
import { Navigator } from "./components/Navigator";
import TrainingList from "./components/TrainingList";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigator />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/customer" component={CustomerList} />
            <Route path="/training" component={TrainingList} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
