"use client";
import React, { useState } from "react";
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import axios from "axios";

 interface FormTypes {
   patientName: string;
   email: string;
   phoneNumber: string;
   department: string;
   additionalInfo: string;
 }
const FormAppointment = () => {
  const FormSchema: ZodType<FormTypes> = z.object({
    patientName: z.string().min(1, "Please enter your name"),
    email: z
      .string()
      .min(1, "Please enter your email")
      .email("Please enter a valid email"),
    phoneNumber: z
      .string().min(0, "phone number is required")
      .min(10, { message: "please inter a valid phone number" })
      .max(13, { message: "please Inter a valid phone number" }),
    department: z.string().min(1, "please select departement"),
    additionalInfo: z.string(),
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormTypes>({
    resolver: zodResolver(FormSchema)
  })

  const handleBook = async (formData: FormTypes) => {
    try {
      const res = await axios.post("/api/appointement", formData);
      toast.success(res.data.message);
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }
  return (
    <div>
      <div className="overflow-hidden space">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-9">
              <div className="title-area">
                <span className="sub-title2">With Access To</span>
                <h2 className="sec-title mb-0">24 HOUR EMERGENCY</h2>
                <h3 className="sec-heading">Assistance</h3>
                <p className="sec-text">
                  Our clinic is equipped with modern facilities and advanced
                  medical technology to ensure accurate diagnoses and effective
                  treatments. This enables us to provide you with the highest
                  standard of care.
                </p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleBook)}
            className="appointment-form2"
          >
            <h4 className="form-title">Make An Appointment</h4>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  {...register("patientName")}
                />
                {errors.patientName && (
                  <p className="text-red-400 mx-3">
                    {errors.patientName.message}
                  </p>
                )}
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-400 mx-3">{errors.email.message}</p>
                )}
              </div>
              <div className="form-group col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <p className="text-red-400 mx-3">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div className="form-group col-md-6">
                <select
                  className="form-select"
                  defaultValue=""
                  {...register("department")}
                >
                  <option value="" disabled hidden>
                    Choose Department
                  </option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                  <option value="Dental Care">Dental Care</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                </select>
                {errors.department && (
                  <p className="text-red-400 mx-3">
                    {errors.department.message}
                  </p>
                )}
              </div>

              <div className="form-group col-12">
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Type Appointment Note...."
                  rows={3}
                  {...register("additionalInfo")}
                ></textarea>
                {errors.additionalInfo && (
                  <p className="text-red-400 mx-3">
                    {errors.additionalInfo.message}
                  </p>
                )}
              </div>
              <div className="form-btn col-12">
                <button disabled={isSubmitting} className="th-btn btn-fw">
                  {isSubmitting ? "Submitting..." : "BOOK AN APPOINTMENT"}
                </button>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-left" />
    </div>
  );
};

export default FormAppointment;
