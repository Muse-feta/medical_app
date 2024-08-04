import { useAuth } from '@/context/authContext';
import axios from 'axios';
import Link from 'next/link'
import React from 'react'

type Props = {}

const MainNav = (props: Props) => {
   const { isLogedIn, userData } = useAuth();
   console.log("isLogedIn", isLogedIn);
   const handleLogout = async () => {
     await axios.get("/api/users/logout");
     window.location.reload();
   };
  return (
    <div className="hidden md:flex">
      <nav className="main-menu d-none d-lg-inline-block">
        <ul>
          <li className="">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li className="">
            <a href="/appointement">Appointements</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            {isLogedIn ? <a className=' cursor-pointer' onClick={handleLogout}>Logout</a>
:
            <a href="/login">Login</a>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav