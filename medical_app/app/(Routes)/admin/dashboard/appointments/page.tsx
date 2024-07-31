"use client";
import DashboardTitle from "@/components/ui/dashboardTitle";
import { DataTable } from "@/components/ui/DataTable";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

const DashboardOrders = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <DashboardTitle title="Appointments" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardOrders;

type Payment = {
  order: number;
  name: string;
  phone: string;
  status: "pending" | "processing" | "success" | "failed";
  date: string;
};

export const data: Payment[] = [
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
  {
    order: 3,
    name: "Muse",
    phone: "fetamuse@gmail.com",
    status: "pending",
    date: "02/14/2024",
  },
 
  // ...
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
       <div className={cn('font-medium w-fit px-4 py-2 rounded-lg',
       { "bg-red-200": row.getValue("status") === "pending",
        "bg-orange-200": row.getValue("status") === "pending",
        "bg-green-200": row.getValue("status") === "completed",
      }
       )}>
        {row.getValue("status")}
       </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
];
