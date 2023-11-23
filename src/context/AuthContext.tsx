import React, { createContext, useEffect, useState } from "react";
import firebase from "../config/firebase";
import { LoginValues } from "../interfaces/interfaces";
import * as userService from "../services/UserServices";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: (formValues: LoginValues) => Promise<void>;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const login = async (formValues: LoginValues) => {
    const uid = await userService.login(formValues);
    if (uid) {
      userService.saveUIDToLocalStorage(uid);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    firebase.auth().signOut();
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
