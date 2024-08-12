"use client";
import DashboardTitle from "@/components/ui/dashboardTitle";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, Toaster } from "sonner";

type Props = {};
type Params = { id: string };

const page = ({ params }: { params: Params }) => {
  const router = useRouter();
  const userId = params.id;

  const handleStatus = async () => {
    try {
      const response = await axios.put(`/api/users/change-role/${userId}`);
      console.log(response.data);
      toast.success("User role changed successfully");
      router.push("/admin/dashboard/users");
    } catch (error: any) {
      console.error("Error accepting appointment:", error);
    }
  };
  return (
    <div>
      <div>
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Change Role</h2>
          <p className="flex justify-center items-center">
            If you want to change the role of the user
          </p>
          <button
            onClick={handleStatus}
            // disabled={isSubmitting}
            // type="submit"
            className="w-full py-2 px-4 bg-[#2bb757] text-white font-semibold rounded-lg shadow-md hover:bg-[#0ba933] focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Change Role
          </button>
        </div>
        <Toaster position="top-left" richColors />
      </div>
    </div>
  );
};

export default page;
