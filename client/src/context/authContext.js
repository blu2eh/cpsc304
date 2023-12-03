import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("email")) || null
  );

  const login = async (inputs) => {
      let res;
      try {
          res = await axios.post("http://localhost:8800/api/auth/login", inputs);
          console.log(2)
          setCurrentUser(res.data);
      } catch (err) {
          console.error(err);
          // Handle the error here
          // For example, you could set an error state and display it to the user
      }
      setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
