"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { tokenDecoder } from "@/helpers/tokenDecoder";
import { decodedToken } from "@/types/types";
import { toast, Toaster } from "sonner";

const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [userInfo, setUserInfo] = useState<decodedToken | null>(null)

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyToken", { token });
      setIsVerified(true);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    const token = window.location.search.split("=")[1];
    setToken(token || "");
  }, []);

  useEffect(() => {
    if (token) {
      const decoded = tokenDecoder(token);
      setUserInfo(decoded);
      console.log(decoded);
      verifyUserEmail();
    }
  }, [token]);

  // const userInfo = tokenDecoder(token);
  // console.log(userInfo);

  const handleSend = async() => {
    try {
        if(userInfo) {
          const res = await axios.post("/api/users/resendEmail", {
            email: userInfo.email,
            userId: userInfo.id,
          });
        }
        toast.success("We sent you an email, please check your inbox");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      {/* <Breadcumb title="Verify Email" subtitle="Verify Email" /> */}
      <div>
        {/* <h1>Verify Page</h1> */}
        {/* <h1>{token ? token : "no token"}</h1> */}
        {isVerified && (
          <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">Email Verified</h1>
              <p className="text-gray-600 mb-4">
                Thank you for verifying your email address. Your account is now
                active and you can start using our services.
              </p>
              <Link
                href="/login"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Go to Login
              </Link>
            </div>
          </div>
        )}
        {error && (
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
              <h1 className="text-2xl font-bold mb-2">Verification Failed</h1>
              <p className="text-gray-600 mb-4">
                Sorry, we couldn't verify your email address. Please try again.
              </p>
              <button onClick={handleSend} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Resend Verification Email
              </button>
            </div>
          </div>
        )}
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default VerifyEmailPage;
