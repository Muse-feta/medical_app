"use client"
import React from 'react'
import {Bar, BarChart as BarGraph,ResponsiveContainer, XAxis, YAxis} from 'recharts'

type Props = {}

const data = [
    {
        name: "jan",
        total: Math.floor(Math.random() * 1000) + 5000
    },
    {
        name: "feb",
        total: Math.floor(Math.random() * 1000) + 50000
    },
    {
        name: "mar",
        total: Math.floor(Math.random() * 1000) + 50000
    },
    {
        name: "apr",
        total: Math.floor(Math.random() * 1000) + 50000
    },
    {
        name: "may",
        total: Math.floor(Math.random() * 1000) + 50000
    },
    {
        name: "jun",
        total: Math.floor(Math.random() * 1000) + 50000
    },
    {
        name: "jul",
        total: Math.floor(Math.random() * 1000) + 50000
    },
    {
        name: "aug",
        total: Math.floor(Math.random() * 1000) + 50000
    },
    {
        name: "sep",
        total: Math.floor(Math.random() * 1000) + 50000
    }
]

const BarChart = (props: Props) => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
        <BarGraph data={data}>
            <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                stroke='#888888'
                fontSize={12}  
            />
            <YAxis
                tickLine={false}
                axisLine={false}
                stroke='#888888'
                fontSize={12}
                tickFormatter={value => `$${value}`}  
            />
            <Bar dataKey={"total"} radius={[4,4,0,0]}/>
        </BarGraph>
    </ResponsiveContainer>
  )
}

export default BarChart