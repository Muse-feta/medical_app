"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { utcToZonedTime, zonedTimeToUtc, format } from "date-fns-tz";

type Params = { id: string };

interface FormData {
  date: string;
  doctorName: string;
  additionalInfo?: string;
}

const page = ({ params }: { params: Params }) => {

  const router = useRouter();
  const appointementId = params.id;

    const schema: ZodType<FormData> = z.object({
      date: z.string().min(1, "Date is required"),
      doctorName: z.string().min(1, "Doctor is required"),
      additionalInfo: z.string().optional(),
    });

      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm<FormData>({ resolver: zodResolver(schema) });

      const onSubmit = (data: FormData) => {
      

        const submitData = {
          date: data.date,
          doctorName: data.doctorName,
          additionalInfo: data.additionalInfo,
        };

        try {
          const res = axios.post(
            `/api/appointement/schedule-appointement/${appointementId}`,
            {
              ...submitData,
            }
          );
          reset();
          toast.success("Appointment scheduled successfully");
          router.push("/admin/dashboard/appointments/scheduled");
        } catch (error: any) {
          console.log(error.message);
        }
      };

     const handleReject = async () => {
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
        <h2 className="text-xl font-semibold mb-4">Schedule Appointment</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-sm font-medium text-gray-700 mb-2"
            >
              Date
            </label>
            <input
              type="datetime-local"
              {...register("date")}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="doctorName"
              className="text-sm font-medium text-gray-700 mb-2"
            >
              Doctor
            </label>
            <select
              id="doctorName"
              {...register("doctorName")}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Select a doctor
              </option>
              <option value="Dr. Abebe">Dr. Abebe</option>
              <option value="Dr. Kebede">Dr. Kebede</option>
              <option value="Dr. Almaz">Dr. Almaz</option>
              <option value="Dr. Chala">Dr. Chala</option>
            </select>
            {errors.doctorName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.doctorName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="additionalInfo"
              className="text-sm font-medium text-gray-700 mb-2"
            >
              Additional Information
            </label>
            <textarea
              {...register("additionalInfo")}
              id="additionalInfo"
              rows={4}
              placeholder="Enter any additional information here..."
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-2 px-4 bg-[#2bb77d] text-white font-semibold rounded-lg shadow-md hover:bg-[#21a870] focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isSubmitting ? "Submitting..." : "Confirm"}
          </button>
        </form>
        <p className="flex justify-center items-center mt-3">
          If you want to reject the appointment
        </p>
        <button
          onClick={handleReject}
          // disabled={isSubmitting}
          // type="submit"
          className="w-full py-2 px-4 bg-[#b72b2b] text-white font-semibold rounded-lg shadow-md hover:bg-[#a90b0b] focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Reject
        </button>
      </div>
      <Toaster position="top-left" richColors />
    </div>
  );
};

export default page;
