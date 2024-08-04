"use client";
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";
import { Toaster, toast } from "sonner";
import React, { useState } from "react";
import Image from "next/image";
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import Link from "next/link";
import authService from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const schema: ZodType<FormValues> = z
    .object({
      firstname: z.string().min(1, "Please enter your first name"),
      lastname: z.string().min(1, "Please enter your last name"),
      email: z
        .string()
        .min(1, "Please enter your email")
        .email("Please enter a valid email"),
      phone: z
        .string()
        .min(10, { message: "please inter a valid phone number" })
        .max(13, { message: "please Inter a valid phone number" }),
      password: z
        .string()
        .min(8, "Password must be at least 6 characters long"),
      confirmPassword: z.string().min(1, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({resolver: zodResolver(schema)})



  const handleAdd = async (formData: FormValues) => {

    try {
      const res = await authService.signUp(formData);
      console.log(res);
      if (res.status === 201) {
        toast.success(res.message);
      
         router.push("/verification");
      } else {
        toast.error(res.message);
      }
     
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong, please try again later");
    }
  };

  return (
    <div>
      <div className="space-bottom">
        <div className="container">
          <form
            onSubmit={handleSubmit(handleAdd)}
            className="contact-form ajax-contact"
            style={{ backgroundImage: `url(${form_bg.src})` }}
          >
            <div className="input-wrap">
              <h2 className="sec-title">Sign Up</h2>
              <div className="row">
                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="First Name"
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <p className="text-red-400 mx-3">
                      {errors.firstname.message}
                    </p>
                  )}
                  <i className="fal fa-user"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Last Name"
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <p className="text-red-400 mx-3">
                      {errors.lastname.message}
                    </p>
                  )}
                  <i className="fal fa-user"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 mx-3">{errors.email.message}</p>
                  )}
                  <i className="fal fa-envelope"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-400 mx-3">{errors.phone.message}</p>
                  )}
                  <i className="fal fa-phone"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-400 mx-3">
                      {errors.password.message}
                    </p>
                  )}
                  <i className="fal fa-lock"></i>
                </div>

                <div className="form-group col-12">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-400 mx-3">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  <i className="fal fa-lock"></i>
                </div>

                <div className="lg:ml-[30px] text-[12px] md:text-[15px]">
                  <p>
                    Already have an account? <Link href="/login">Login</Link>
                  </p>
                  {/* <p>
                    Forgot your password?{" "}
                    <Link href="/forgot-password">Forgot Password</Link>
                  </p> */}
                </div>

                <div className="form-btn col-12">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="th-btn btn-fw"
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>
      <Toaster richColors position="top-left" />
    </div>
  );
};

export default SignUpForm;
