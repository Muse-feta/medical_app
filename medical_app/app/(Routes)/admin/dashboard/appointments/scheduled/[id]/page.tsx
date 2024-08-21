"use client";
import DashboardTitle from "@/components/ui/dashboardTitle";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, Toaster } from "sonner";

type Params = { id: string };

const Page = ({ params }: { params: Params }) => {
  const router = useRouter();
  const appointementId = params.id;

  const handleStatus = async () => {
    try {
      const response = await axios.put(
        `/api/appointement/change-status/${appointementId}`,
        {
          status: "REJECTED",
        }
      );
      console.log(response.data);
      toast.success("Appointment rejected successfully");
      router.push("/admin/dashboard/appointments/rejected");
    } catch (error: any) {
      console.error("Error rejecting appointment:", error);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Reject Appointment</h2>
        <p className="flex justify-center items-center">
          If you want to reject the appointment
        </p>
        <button
          onClick={handleStatus}
          className="w-full py-2 px-4 bg-[#b72b2b] text-white font-semibold rounded-lg shadow-md hover:bg-[#a90b0b] focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Reject
        </button>
      </div>
      <Toaster position="top-left" richColors />
    </div>
  );
};

export default Page;
