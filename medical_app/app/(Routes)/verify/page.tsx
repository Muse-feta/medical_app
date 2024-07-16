"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

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
    if (token) verifyUserEmail();
  }, [token]);
  return (
    <div>
      <h1>Verify Page</h1>
      {/* <h1>{token ? token : "no token"}</h1> */}
      {isVerified && (
        <div>
          <h1>email verified</h1>
          <Link className=" text-3xl " href="/login">
            login
          </Link>
        </div>
      )}
      {error && (
        <div>
          <h1>Verify Error</h1>
          <p>{error}</p>
          <Link className=" text-3xl " href="/signup">
            signup
          </Link>
        </div>
        )}
    </div>
  );
};

export default VerifyEmailPage;
