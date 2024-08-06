import { useAuth } from '@/context/authContext';
import axios from 'axios';
import Link from 'next/link'
import React from 'react'
import { toast, Toaster } from 'sonner';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsDown, CircleUser } from 'lucide-react';


type Props = {}

const MainNav = (props: Props) => {
   const { isLogedIn,isAdmin, userData } = useAuth();
  //  console.log("isLogedIn", isLogedIn);
  //  console.log("isAdmin", isAdmin);
  //  console.log("userData", userData);
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li className="">
            <Link href="/appointement">Appointements</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
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
              <Link href="/login">Login</Link>
            )}
          </li>
          {isLogedIn && (
            <li className="relative top-2">
              <Popover>
                <PopoverTrigger className="">
                  <CircleUser className="w-8 h-8" />
                </PopoverTrigger>
                <PopoverContent>
                  {isLogedIn && <p> Wellcome: {userData?.firstName}</p>}
                  <p> Email: {userData?.email}</p>
                  <Link href="/dashboard">View Appointments</Link>
                </PopoverContent>
              </Popover>
            </li>
          )}
        </ul>
      </nav>
      <Toaster position="top-left" richColors />
    </div>
  );
}

export default MainNav