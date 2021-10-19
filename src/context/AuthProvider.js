import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseContext = useFirebase();
  const servicesContext = useServices();
  return (
    <AuthContext.Provider value={{ servicesContext, firebaseContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
