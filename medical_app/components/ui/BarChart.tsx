"use client";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";

type AppointmentData = {
  name: string;
  total: number;
};

const BarChart = () => {
  const [data, setData] = useState<AppointmentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/appointement");
        const appointments = response.data.data;

        if (!appointments || !Array.isArray(appointments)) {
          throw new Error("Invalid data format");
        }

        // Log the raw data to check the response
        console.log("Fetched appointments:", appointments);

        // Process appointments data to group by month and count appointments
        const groupedData: { [key: string]: number } = {};

        appointments.forEach((appointment: any) => {
          const date = new Date(appointment.createdAt);
          const month = `${date.getFullYear()}-${date.getMonth() + 1}`; // Format as "YYYY-MM"

          if (!groupedData[month]) {
            groupedData[month] = 0;
          }
          groupedData[month]++;
        });

        // Log the grouped data
        console.log("Grouped data:", groupedData);

        // Define months for the year 2024
        const months = [
          "2024-1",
          "2024-2",
          "2024-3",
          "2024-4",
          "2024-5",
          "2024-6",
          "2024-7",
          "2024-8",
          "2024-9",
          "2024-10",
          "2024-11",
          "2024-12",
        ];

        // Get the current month in "YYYY-MM" format
        const currentMonth = `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }`;

        // Convert grouped data into the format required by Recharts
        const formattedData = months.map((month) => ({
          name: month,
          total: month <= currentMonth ? groupedData[month] || 0 : 0, // Show data for past and current months, zero for future months
        }));

        // Log the formatted data
        console.log("Formatted data:", formattedData);

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="#8884d8" />
      </BarGraph>
    </ResponsiveContainer>
  );
};

export default BarChart;
