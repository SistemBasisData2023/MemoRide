import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // Perform login logic and set the user object
    setUser({ username });
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Pass the handleLogin and handleLogout functions to the child components
  const authContextValue = {
    user,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
