import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Todolist from "./components/Todolist";
import { Navigator } from "./components/Navigator";

function App() {
  return (
    <div className="App">
      <div className="App-header">Welcome to React Router</div>
      <div className="App-body">
        <Router>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todo" component={Todolist} />
              <Route path="/contact" render={() => <h1>Contact address</h1>} />
              <Router render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
