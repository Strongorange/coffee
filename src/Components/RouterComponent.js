import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";
import Footer from "./Footer";
import Header from "./Header";
import PageNotFound from "./PageNotFound";

const RouterComponent = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterComponent;
