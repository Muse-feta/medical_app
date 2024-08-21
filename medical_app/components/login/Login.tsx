"use client";
import "@/asset/css/app.min.css";
import "@/asset/css/style.css";
import "@/asset/css/fontawesome.min.css";
import React, { useState } from "react";
import Image from "next/image";
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import Link from "next/link";
import { toast, Toaster } from "sonner";
import authService from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const schema: ZodType<FormValues> = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const router = useRouter();

  const handleLogin = async (formData: FormValues) => {
    try {
      const res = await authService.login(formData);
      console.log(res);
      if (res.status === 200) {
        toast.success(res.message);
        reset();
        // redirect to homepage
        window.location.href = "/";
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.log("Error", error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="space-bottom">
        <div className="container">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="contact-form ajax-contact"
            style={{ backgroundImage: `url(${form_bg.src})` }}
          >
            <div className="input-wrap">
              <h2 className="sec-title">Login</h2>
              <div className="row">
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
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-400 mx-3">
                      {errors.password.message}
                    </p>
                  )}
                  <i className="fal fa-lock"></i>
                </div>
                <div className="lg:ml-[30px] text-[12px] md:text-[15px]">
                  <p>
                    If you don&apos;t have an account?{" "}
                    <Link href="/signup">Sign Up</Link>
                  </p>
                  <p>
                    If you forgot your password?{" "}
                    <Link href="/forgot-password">Forgot Password</Link>
                  </p>
                </div>
                <div className="form-btn col-12">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="th-btn btn-fw"
                  >
                    {isSubmitting ? "Submitting..." : "Login"}
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>

      <Toaster position="top-left" richColors />
    </div>
  );
};

export default Login;
