import React from "react";

import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";

import HomePage from "./pages/home-page/home-page.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
