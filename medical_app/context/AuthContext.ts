"use client";

import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
      
      <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
  )
};
