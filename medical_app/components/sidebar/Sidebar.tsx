"use client"
import React, { useEffect, useState } from 'react'
import { Nav } from '../ui/Nav'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

import { Button } from '../ui/button';
import { AppWindow, ChevronRight, LayoutDashboard, Users } from 'lucide-react';

type Props = {}

const Sidebar = (props: Props) => {
  const [mobileWidth, setMobileWidth] = useState(false);
  const onlyWidth = useWindowWidth();
    const [isCollapsed, setIsCollapsed] = useState(false)

      useEffect(() => {
        setMobileWidth(onlyWidth < 768);
      }, [onlyWidth]);
  return (
    <div className="relative min-w-[80px] border-r px-4 pb-10 pt-[70px]">
      <div
        className="absolute top-0 right-[-20px] rounded-full my-3"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {!mobileWidth &&(
          <Button variant={"outline"} className="px-2 rounded-full">
            <ChevronRight />
          </Button>
        )}
      </div>
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            // label: "128",
            href: "/admin/dashboard",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            label: "9",
            href: "/admin/dashboard/users",
            icon: Users,
            variant: "ghost",
          },
          {
            title: "Appointments",
            label: "",
            href: "/admin/dashboard/appointments",
            icon: AppWindow,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}

export default Sidebar