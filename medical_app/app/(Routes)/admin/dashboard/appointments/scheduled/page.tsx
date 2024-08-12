"use client";

import DashboardTitle from "@/components/ui/dashboardTitle";
import { DataTable } from "@/components/ui/DataTable";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import React, { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

const DashboardOrders = (props: Props) => {
  const { userData } = useAuth();
  const router = useRouter();

  const [data, setData] = React.useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/appointement/scheduled`);
        console.log("res", res.data.data);
        setData(res.data.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);

  const handleRowClick = (rowData: Payment) => {
    router.push(`/admin/dashboard/appointments/scheduled/${rowData.id}`);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <DataTable columns={columns} data={data} onRowClick={handleRowClick} />
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
  info: {
    id: number;
    appointmentId: number;
    date: string;
    additionalInfo: string;
    doctorName: string;
  }[];
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Order Id",
    cell: ({ row }) => row.getValue("id"),
  },
  {
    accessorKey: "patientName",
    header: "Name",
    cell: ({ row }) => row.getValue("patientName"),
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
    cell: ({ row }) => row.getValue("phoneNumber"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
          "bg-red-200": row.getValue("status") === "PENDING",
          "bg-orange-200": row.getValue("status") === "REJECTED",
          "bg-green-200": row.getValue("status") === "ACCEPTED",
        })}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.getValue("email"),
  },
 {
  accessorKey: "info",
  header: "Date",
  cell: ({ row }) => {
    const info = row.getValue("info") as { date: string }[];
    return info.map((entry) => (
      <div key={entry.date}>
        {new Date(entry.date).toLocaleString()} {/* This will show date and time */}
      </div>
    ));
  },
},
  {
    accessorKey: "info",
    header: "Doctor",
    cell: ({ row }) => {
      const info = row.getValue("info") as { doctorName: string }[];
      return info.length > 0 ? (
        <div>{info[0].doctorName}</div>
      ) : (
        <div>No Doctor</div>
      );
    },
  },
];
