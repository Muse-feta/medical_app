"use client";
// import { children } from "@/types/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type userInfo = {
  userId: number;
  email: string;
  firstName: string;
  phone: string;
};



const AuthContext = createContext<any>(null);



const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState<userInfo | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/users/me");
        const user = response.data;
        console.log("user", user);
        const userInfo: userInfo = {
          userId: user.data.userInfo.userId,
          email: user.data.user.email,
          firstName: user.data.user.firstname,
          phone: user.data.userInfo.phone,
        };
        setUserData(userInfo);
        if (user.success === true) {
          setIsLogedIn(true);
        }
        if (user.data.userInfo.role === "ADMIN") {
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
    setUserData,
  };
  return(
     <AuthContext.Provider value={value}>
      {children}
     </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
