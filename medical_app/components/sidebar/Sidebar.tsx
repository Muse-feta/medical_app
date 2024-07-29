"use client"
import React, { useState } from 'react'
import { Nav } from '../ui/Nav'

import { Button } from '../ui/button';
import { AppWindow, ChevronRight, LayoutDashboard, Users } from 'lucide-react';

type Props = {}

const Sidebar = (props: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="relative min-w-[80px] border-r px-4 pb-10 pt-[70px]">
      <div
        className="absolute top-0 right-[-20px] rounded-full my-3"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Button variant={"outline"} className="px-2 rounded-full">
          <ChevronRight />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            // label: "128",
            href: "/dashboard/home",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            label: "9",
            href: "/dashboard/users",
            icon: Users,
            variant: "ghost",
          },
          {
            title: "Appointments",
            label: "",
            href: "/dashboard/appointments",
            icon: AppWindow,
            variant: "ghost",
          },
          
        ]}
      />
    </div>
  );
}

export default Sidebar