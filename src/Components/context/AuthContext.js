import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Initialize user as null

  async function getLoggedIn() {
    const BASE_URL = 'http://localhost:3177';
    try {
      const loggedInRes = await axios.get(`${BASE_URL}/auth/loggedIn`, { withCredentials: true });
      setLoggedIn(loggedInRes.data.auth);
      setUser(loggedInRes.data.user);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
