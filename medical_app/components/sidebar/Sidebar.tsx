"use client"
import React, { useEffect, useState } from 'react'
import { Nav } from '../ui/Nav'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

import { Button } from '../ui/button';
import { AppWindow, CalendarCheck, CalendarOff, ChevronRight, LayoutDashboard, MonitorDot, Users } from 'lucide-react';

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
        {!mobileWidth && (
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
            title: (
              <div className="whitespace-normal max-w-[80px] ">Active</div>
            ),
            label: "",
            href: "/admin/dashboard/appointments/active",
            icon: MonitorDot,
            variant: "ghost",
          },
          {
            title: (
              <div className="whitespace-normal max-w-[80px] ">Scheduled</div>
            ),
            label: "",
            href: "/admin/dashboard/appointments/scheduled",
            icon: CalendarCheck,
            variant: "ghost",
          },
          {
            title: (
              <div className="whitespace-normal max-w-[80px] ">Rejected</div>
            ),
            label: "",
            href: "/admin/dashboard/appointments",
            icon: CalendarOff,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}

export default Sidebar