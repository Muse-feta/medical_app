// components/VerificationPage.tsx
import React from "react";

const VerificationPage: React.FC = () => {
  return (
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
        <h1 className="text-2xl font-bold mb-2">Please verify your email</h1>
        <p className="text-gray-600 mb-4">
          You&apos;re almost there! We sent an email to{" "}
          <span className="font-medium text-gray-800">medical@email.com</span>
        </p>
        <p className="text-gray-600 mb-4">
          Just click on the link in that email to complete your signup. If you
          don&apos;t see it, you may need to{" "}
          <span className="font-medium">check your spam folder.</span>
        </p>
        {/* <p className="text-gray-600 mb-6">
          Still can&apos;t find the email? No problem.
        </p> */}
        {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Resend Verification Email
        </button> */}
      </div>
    </div>
  );
};

export default VerificationPage;
