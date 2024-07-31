"use client"
import DashboardTitle from '@/components/ui/dashboardTitle';
import { DataTable } from '@/components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'

type Props = {}

const DashboardUsers = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <DashboardTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DashboardUsers

type Payment = {
  name: string;
  email: string;
  status: "pending" | "processing" | "success" | "failed";
  role: string;
};

export const data: Payment[] = [
  {
    name: "Muse",
    email: "fetamuse@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  {
    name: "Feta",
    email: "feta@gmail.com",
    status: "pending",
    role: "admin",
  },
  // ...
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <img
            className="w-4 h-4 rounded-full"
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="avater"
          />
          <span>{row.getValue("name")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];