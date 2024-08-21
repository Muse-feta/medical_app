"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import form_bg from "@/asset/img/bg/contact_form_bg.png";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = window.location.search.split("=")[1];
    setToken(token || "");
  }, []);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post("/api/users/verifyForgotToken", { token });
        if (res.data.status === 200) {
          setUserId(res.data.userId);
          setIsVerified(true);
        } else {
          toast.error(res.data.message);
          setError(true);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setError(true);
      }
    };

    verifyToken();
  }, [token]);

  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isVerified) {
        const res = await axios.post("/api/users/resetPassword", {
          password,
          userId,
        });

        if (res.status === 200) {
          toast.success(res.data.message);
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        } else {
          toast.error(res.data.message);
          setError(true);
        }
      }
    } catch (error: any) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div>
      {isVerified && (
        <div>
          <div className="space-bottom">
            <div className="container">
              <form
                onSubmit={handleReset}
                className="contact-form ajax-contact"
                style={{ backgroundImage: `url(${form_bg.src})` }}
              >
                <div className="input-wrap">
                  <h2 className="sec-title">Reset Password</h2>
                  <div className="row">
                    <div className="form-group col-12">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your Password"
                      />
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
                      <button type="submit" className="th-btn btn-fw">
                        Reset
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
      )}

      {error && (
        <div>
          <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-4">
                Sorry, an unexpected error has occurred. Please try again later.
              </p>
              <Link
                href="/forgot-password"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Try Again!
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordPage;
