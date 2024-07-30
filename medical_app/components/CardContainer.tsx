import { cn } from '@/lib/utils';
import React from 'react'

type Props = {}

const CardContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn("flex w-full flex-col gap-3 rounded-xl border p-3 px-5 shadow", props.className)}
    />
  );
}

export default CardContainer