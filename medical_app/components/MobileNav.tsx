import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter } from 'lucide-react';
import { useAuth } from '@/context/authContext';
import axios from 'axios';
import { toast, Toaster } from 'sonner';



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
                <a href="home-medical-clinic.html">Home</a>
              </li>
              <li className="mt-2">
                <a href="/about">About Us</a>
              </li>
              <li className="mt-2">
                <a href="/appointement">Appointement</a>
              </li>
              <li className="mt-2">
                <a href="/contact">Contact</a>
              </li>
              {isAdmin && (
                <li>
                  <a href="/admin/dashboard">Admin</a>
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
        </SheetContent>
      </Sheet>
      <Toaster position="top-left" richColors />
    </div>
  );
}

export default MobileNav