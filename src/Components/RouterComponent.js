import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Shop from "../Screens/Shop";
import Footer from "./Footer";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";

const RouterComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterComponent;
