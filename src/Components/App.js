import React, { useEffect, useContext } from "react";
import RouterComponent from "./RouterComponent";
import "../scss/styles.scss";
import { UserContext } from "../Contexts/Context";
import { onAuthStateChanged } from "firebase/auth";
import { FBauth } from "../Firebase/FB";

const App = () => {
  // States, Variables
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    onAuthStateChanged(FBauth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        console.log(`Logged in ${uid}`);
      } else {
        console.log("logged out");
      }
    });
  }, []);

  return <RouterComponent />;
};

export default App;
