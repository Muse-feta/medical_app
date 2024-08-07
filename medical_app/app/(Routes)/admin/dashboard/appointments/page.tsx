"use client";
import DashboardTitle from "@/components/ui/dashboardTitle";
import { DataTable } from "@/components/ui/DataTable";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import React, { useEffect } from "react";
import { useAuth } from "@/context/authContext";

type Props = {};

const DashboardOrders = (props: Props) => {
    const { userData } = useAuth();
  
    const [data, setData] = React.useState<Payment[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
         
            const res = await axios.get(`/api/appointement`);
            console.log("res", res.data.data);

            setData(res.data.data);
          
        } catch (error) {
          console.log("Error", error);
        }
      };
      fetchData();
    }, []);
  return (
    <div className="flex flex-col gap-5 w-full">
      <DashboardTitle title="Appointments" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardOrders;

type Payment = {
  id: number;
  patientName: string;

  phoneNumber: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  email: string;
};



export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Order Id",
  },
  {
    accessorKey: "patientName",
    header: "Name",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "pending",
            "bg-orange-200": row.getValue("status") === "pending",
            "bg-green-200": row.getValue("status") === "completed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
