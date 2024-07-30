import { RecentProps } from '@/types/types';
import React from 'react'



const RecentCard = (props: RecentProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3 ">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/9.x/miniavs/svg?seed=${props.name}`}
            alt="avater"
          />
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className=" text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
          </div>
        </div>
      </section>
        <p>{props.date}</p>
    </div>
  );
}

export default RecentCard