import { LucideIcon } from 'lucide-react'
import React from 'react'
import CardContainer from './CardContainer'
import { CardProps } from '@/types/types';



const Card = (props: CardProps) => {
  return <CardContainer>

    <section className='flex justify-between gap-2'>
    {/*  label */}
    <p className='text-sm'>{props.label}</p>
    {/*  icon */}
    <props.icon className='w-4 h-4 text-gray-400'/>
    </section>

    <section className='flex flex-col gap-1'>
        <h2 className='text-2xl font-semibold'>{props.amount}</h2>
        <p className='text-xs text-gray-500'>{props.description}</p>
    </section>

  </CardContainer>;
}

export default Card