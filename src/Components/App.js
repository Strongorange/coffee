import React, { useEffect, useContext } from "react";
import RouterComponent from "./RouterComponent";
import "../scss/styles.scss";
import { UserContext } from "../Contexts/Context";
import { onAuthStateChanged } from "firebase/auth";
import { FBauth } from "../Firebase/FB";

const App = () => {
  // States, Variables
  const { user, setUser, setIsLoggedIn } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    onAuthStateChanged(FBauth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
        setIsLoggedIn(true);
        console.log(`Logged in ${uid}`);
      } else {
        setIsLoggedIn(false);
        console.log("logged out");
      }
    });
  }, []);

  return <RouterComponent />;
};

export default App;
