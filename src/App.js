import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from "./compenent/AddEvents/AddEvents";
import Home from "./compenent/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">Add Event</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addEvents">
            <AddEvents />
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;