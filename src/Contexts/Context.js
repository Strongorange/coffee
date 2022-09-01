import { createContext, useState } from "react";

export const UserContext = createContext();

const UserStore = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
