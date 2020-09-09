import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Splicky Challenge</h1>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Details} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
}

export default App;
