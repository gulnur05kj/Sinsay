import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState('sign-in');

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData")) || {};
    if (savedUserData?.email && savedUserData?.password) {
      setIsLoggedIn('/');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
