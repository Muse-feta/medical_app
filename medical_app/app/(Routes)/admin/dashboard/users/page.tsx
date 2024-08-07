"use client"
import DashboardTitle from '@/components/ui/dashboardTitle';
import { DataTable } from '@/components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import axios from 'axios';
import React, { useEffect } from 'react'

type Props = {}
type Payment = {
  firstname: string;
  email: string;
  phone: string;
  role: string;
};

const DashboardUsers = (props: Props) => {
  const [data, setData] = React.useState<Payment[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/api/users`);
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
      <DashboardTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DashboardUsers




export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "firstname",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue(
              "firstname"
            )}`}
            alt="avater"
          />
          <span>{row.getValue("firstname")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];