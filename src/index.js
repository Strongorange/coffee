import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import UserStore from "./Contexts/Context";

ReactDOM.render(
  <React.Fragment>
    <UserStore>
      <App />
    </UserStore>
  </React.Fragment>,
  document.getElementById("root")
);
