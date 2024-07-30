import Card from '@/components/Card';
import CardContainer from '@/components/CardContainer';
import BarChart from '@/components/ui/BarChart';
import DashboardTitle from '@/components/ui/dashboardTitle'
import RecentCard from '@/components/ui/RecentCard';
import { CardProps, RecentProps } from '@/types/types';
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

const AppointementsData: RecentProps[] = [
  {
    name: "Muse",
    email: "H0qg6@example.com",
    date: "10/10/2024",
  },
  {
    name: "Feta",
    email: "H0qg6@example.com",
    date: "10/10/2024",
  },
  {
    name: "Tsige",
    email: "H0qg6@example.com",
    date: "10/10/2024",
  },
  {
    name: "Eden",
    email: "H0qg6@example.com",
    date: "10/10/2024",
  },
  {
    name: "Enku",
    email: "H0qg6@example.com",
    date: "10/10/2024",
  },
]

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <DashboardTitle title="Dashboard" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>

      {/* graph section */}
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContainer>
          <p className="md:p-2 font-semibold">Overview</p>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <BarChart />
            </div>
          </div>
        </CardContainer>

        <CardContainer className='flex justify-between gap-4'>
          <section>
            <p>Recent Appointements</p>
            <p className="text-sm text-gray-400">
              You have 12 Appointements in ths month
            </p>
          </section>
          {AppointementsData.map((data, index) => (
            <RecentCard key={index} {...data} />
          ))}
        </CardContainer>
      </section>
    </div>
  );
}

export default Dashboard