"use client"
import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="heart"></div>
      <style jsx>{`
        .heart {
          width: 100px;
          height: 100px;
          background-color: red;
          position: relative;
          display: inline-block;
          transform: rotate(-45deg);
          animation: heartbeat 1.5s infinite;
        }

        .heart::before,
        .heart::after {
          content: "";
          background-color: red;
          border-radius: 50%;
          position: absolute;
          width: 100px;
          height: 100px;
        }

        .heart::before {
          top: -50px;
          left: 0;
        }

        .heart::after {
          left: 50px;
          top: 0;
        }

        @keyframes heartbeat {
          0%,
          28%,
          70%,
          100% {
            transform: scale(1) rotate(-45deg);
          }
          14%,
          42% {
            transform: scale(1.2) rotate(-45deg);
          }
        }
      `}</style>
    </div>
  );
}

export default loading