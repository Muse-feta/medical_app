"use client";
import DashboardTitle from "@/components/ui/dashboardTitle";
import { DataTable } from "@/components/ui/DataTable";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import React, { useEffect } from "react";
import { useAuth } from "@/context/authContext";

type Payment = {
  id: number;
  patientName: string;
  phoneNumber: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  email: string;
  info: {
    id: number;
    appointmentId: number;
    date: string;
    additionalInfo: string;
    doctorName: string;
  }[];
};

type Props = {};

const UserAppointement =  (props: Props) => {
  const { userData } = useAuth();
  const userId = userData?.userId;
  console.log("userId", userId);
   const [data, setData] = React.useState<Payment[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
          if(userId) {
             const res = await axios.get(`/api/appointement/${userId}`);
             console.log("res", res.data.data);

             setData(res.data.data);
          }

      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchData()
  },[userId]);
  return (
    <div className="flex flex-col gap-5 w-full m-3 mr-0">
      <div className="overflow-x-auto sm:overflow-x-auto md:overflow-auto max-w-full max-h-96">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default UserAppointement;




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
  {
    accessorKey: "info",
    header: "Date",
    cell: ({ row }) => {
      const info = row.getValue("info") as { date: string }[] | undefined;

      // Ensure info is defined and is an array before accessing length
      return info && Array.isArray(info) && info.length > 0 ? (
        <div>{new Date(info[0].date).toLocaleDateString()}</div>
      ) : (
        <div>No Date</div>
      );
    },
  },
];

