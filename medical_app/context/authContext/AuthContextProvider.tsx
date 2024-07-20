"use client";
import { children } from "@/types/types";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";


type userInfo = {
    userId: number
    email: string
    firstName: string
    phone: string
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("useAuth context:", context);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

const AuthContextProvider = ({ children }: children) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState<userInfo | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/users/me");
        const user = response.data;
        console.log("user", user);
        const userInfo: userInfo = {
            userId: user.data.userInfo.userId,
            email: user.data.user.email,
            firstName: user.data.user.firstName,
            phone: user.data.userInfo.phone
        };
        setUserData(userInfo);
        if (user.data.status === 200) {
          setIsLogedIn(true);
        }
        if(user.data.userInfo.role === "ADMIN"){
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const value = {
    isLogedIn,
    setIsLogedIn,
    isAdmin,
    setIsAdmin,
    userData,
    setUserData
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
