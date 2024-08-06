import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter, CircleUser } from 'lucide-react';
import { useAuth } from '@/context/authContext';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



type Props = {}

const MobileNav = (props: Props) => {
    const { isLogedIn, isAdmin, userData } = useAuth();
    console.log("isLogedIn", isLogedIn);
    const handleLogout = async () => {
      await axios.get("/api/users/logout");
       toast.success("Logout successfully");
      window.location.reload();
    };
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger className="mt-[20px]">
          <AlignCenter />
        </SheetTrigger>
        <SheetContent className="mt-[20px]">
          <SheetHeader>
            <SheetTitle className="mt-[20px]">
              Are you absolutely sure?
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <nav className="mt-20">
            <ul className=" list-none gap-5 text-black">
              <li className="">
                <Link href="home-medical-clinic.html">Home</Link>
              </li>
              <li className="mt-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mt-2">
                <Link href="/appointement">Appointement</Link>
              </li>
              <li className="mt-2">
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
              <li className="">
                <Popover>
                  <PopoverTrigger>
                    <CircleUser className="w-8 h-8" />
                  </PopoverTrigger>
                  <PopoverContent>
                    {isLogedIn && <p> Wellcome: {userData?.firstName}</p>}
                    <p> Email: {userData?.email}</p>
                    <Link href="/dashboard">View Appointments</Link>
                  </PopoverContent>
                </Popover>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
      <Toaster position="top-left" richColors />
    </div>
  );
}

export default MobileNav