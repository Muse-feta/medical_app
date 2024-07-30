import Card from '@/components/Card';
import DashboardTitle from '@/components/ui/dashboardTitle'
import { CardProps } from '@/types/types';
import { DollarSign } from 'lucide-react';
import React from 'react'

type Props = {}
const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    description: "+20.1% from last month",
    icon: DollarSign,
    amount: "$ 4398.00",
  },
  {
    label: "Total Revenue",
    description: "+20.1% from last month",
    icon: DollarSign,
    amount: "$ 4398.00",
  },
  {
    label: "Total Revenue",
    description: "+20.1% from last month",
    icon: DollarSign,
    amount: "$ 4398.00",
  },
  {
    label: "Total Revenue",
    description: "+20.1% from last month",
    icon: DollarSign,
    amount: "$ 4398.00",
  },
];

const Dashboard = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <DashboardTitle title='Dashboard'/>

      <section className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
        {cardData.map((card, index) => (
          <Card key={index} {...card}/>
        ))}
      </section>
    </div>
  )
}

export default Dashboard