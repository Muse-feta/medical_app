import { RecentProps } from "@/types/types";
import React from "react";
import Image from "next/image"; // Import Image from next/image

const RecentCard = (props: RecentProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <Image
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.patientName}`}
            alt="avatar"
            width={200}
            height={200}
            layout="fixed" // Use layout fixed to avoid layout shifts
          />
        </div>
        <div className="text-sm">
          <p>{props.patientName}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.phoneNumber}</p>
    </div>
  );
};

export default RecentCard;
