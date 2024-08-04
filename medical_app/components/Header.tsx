"use client";
import React from "react";
import Image from "next/image";
import logo from "@/asset/img/logo.svg";
import Link from "next/link";
import axios from "axios";
import { useAuth } from "@/context/authContext";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";


const Header = () => {
  const { isLogedIn, userData } = useAuth();
console.log("isLogedIn", isLogedIn);
  const handleLogout = async () => {
    await axios.get("/api/users/logout");
    window.location.reload();
  };

  return (
    <header className=" top-0 sticky w-full border-b z-10 bg-white shadow-md">
      <div className="h-16 lg:h-24 flex justify-between mx-5">
        {/* desktop and mobile */}
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="flex justify-end">
          {/* desktop */}
          <MainNav />
          {/* mobile */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
