import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
function AppContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const login = (status) => {
    setAuth(status);
  };
  const [authUser, setAuthUser] = useState(false);
  const loginUser = (status) => {
    setAuthUser(status);
  };
  const [length, setLength] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    {
      length === null ? (length = 0) : setLength(cart.length);
    }
  }, [length]);

  console.log(auth, authUser);
  const Length = (num) => {
    setLength(Math.abs(num + 1));
  };
  const UserName = (user) => {
    setName(user);
  };

  return (
    <AppContext.Provider
      value={{
        length,
        Length,
        auth,
        login,
        authUser,
        loginUser,
        UserName,
        name,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
