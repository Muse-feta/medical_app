"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Params = { id: string };

interface FormData {
  date: string;
  doctorName: string;
  additionalInfo?: string;
}

const page = ({ params }: { params: Params }) => {

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
        // Convert date string to Date object
        const formattedDate = new Date(data.date);

        // Now you can use `formattedDate` when saving to the database
        console.log({
          date: formattedDate,
          doctorName: data.doctorName,
          additionalInfo: data.additionalInfo,
        });
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
              type="date"
              {...register("date")}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
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
            type="submit"
            className="w-full py-2 px-4 bg-[#2bb77d] text-white font-semibold rounded-lg shadow-md hover:bg-[#21a870] focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
