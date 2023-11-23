import { createContext, useEffect, useState } from "react";
import firebase from "../config/firebase";
import {
  AuthProviderProps,
  LoginValues,
  UserData,
} from "../interfaces/interfaces";
import * as userService from "../services/UserServices";

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  userData: UserData | null;
  login: (formValues: LoginValues) => Promise<void>;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserData = localStorage.getItem("userData");
    if (token && storedUserData) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const login = async (formValues: LoginValues) => {
    const uid = await userService.login(formValues);
    if (uid) {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
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
    userData,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
