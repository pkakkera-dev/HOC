import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./styles/style.scss";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Songs from "./components/Songs";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-link">
          <Link to="/"> Home</Link>
          <Link to="albums"> Album</Link>
          <Link to="/songs"> Songs</Link>
          <Link to="/about"> About</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/albums" component={Albums} />
          <Route path="/songs" component={Songs} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
