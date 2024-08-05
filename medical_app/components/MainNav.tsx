import { useAuth } from '@/context/authContext';
import axios from 'axios';
import Link from 'next/link'
import React from 'react'
import { toast, Toaster } from 'sonner';

type Props = {}

const MainNav = (props: Props) => {
   const { isLogedIn,isAdmin, userData } = useAuth();
   console.log("isLogedIn", isLogedIn);
   console.log("isAdmin", isAdmin);
   const handleLogout = async () => {
     await axios.get("/api/users/logout");
     toast.success('Logout successfully')
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
          {isAdmin && (
            <li>
              <Link href="/admin/dashboard">Admin</Link>
            </li>
          )}
          <li>
            {isLogedIn ? (
              <a className=" cursor-pointer" onClick={handleLogout}>
                Logout
              </a>
            ) : (
              <a href="/login">Login</a>
            )}
          </li>
        </ul>
      </nav>
      <Toaster position="top-left" richColors />
    </div>
  );
}

export default MainNav