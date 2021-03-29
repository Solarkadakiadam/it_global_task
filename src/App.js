import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./views/header";
import Home from "./views/home";
import Users from "./views/users";
import Navigation from "./components/nav";

export default function App() {
  return (
    <Router>
      <Header />
      <Navigation />

      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
