import React, { createContext } from "react";
import useClients from "../hooks/useClients";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const firebaseAll = useFirebase();
  const servicesAll = useServices();
  const clientsAll = useClients();
  return (
    <AuthContext.Provider value={{ servicesAll, clientsAll, firebaseAll }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
