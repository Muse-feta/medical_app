"use client";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import BarChart from "@/components/ui/BarChart";
import DashboardTitle from "@/components/ui/dashboardTitle";
import RecentCard from "@/components/ui/RecentCard";
import { CardProps, RecentProps } from "@/types/types";
import axios from "axios";
import { AppWindow, DollarSign, MonitorDot, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [cardData, setCardData] = useState<CardProps[]>([]);
  const [recentData, setRecentData] = useState<RecentProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/card-info`);
        setCardData([
          {
            label: "Total Users",
            description: "Total number of users",
            icon: Users,
            amount: `${res.data.totalUsers}`,
          },
          {
            label: "New Users",
            description: "New users added in the last month",
            icon: Users,
            amount: `${res.data.newUsersLast30Days}`,
          },
          {
            label: "Appointments",
            description: "Total number of appointments",
            icon: AppWindow,
            amount: `${res.data.totalAppointments}`,
          },
          {
            label: "Active Appointments",
            description: "Total number of active appointments",
            icon: MonitorDot,
            amount: `${res.data.totalUsers}`,
          },
        ]);
      } catch (error) {
        console.log("Error", error);
      }
    };

    const fetchRecentData = async () => {
      try {
        const res = await axios.get(`/api/appointement/recent-appointement`);
        setRecentData(res.data.data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
    fetchRecentData();
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full">
      <DashboardTitle title="Dashboard" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>

      {/* Graph section */}
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContainer>
          <p className="md:p-1 font-semibold">Overview</p>
          <div className="overflow-x-auto scrollbar-hidden">
            <div className="min-w-[600px]">
              <BarChart />
            </div>
          </div>
        </CardContainer>

        <CardContainer className="flex justify-between gap-4">
          <section>
            <p>Recent Appointments</p>
            <p className="text-sm text-gray-400">
              You have {recentData.length} Appointments in this Day
            </p>
          </section>
          <div className="h-80 overflow-y-auto scrollbar-hidden">
            {recentData.map((data, index) => (
              <RecentCard key={index} {...data} />
            ))}
          </div>
        </CardContainer>
      </section>
    </div>
  );
};

export default Dashboard;
