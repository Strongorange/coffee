import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Shop from "../Screens/Shop";
import Footer from "./Footer";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";
import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";

const RouterComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/profile" exact element={<Profile />} />

        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterComponent;
