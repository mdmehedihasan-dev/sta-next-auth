"use client";

import React from "react";
import FeedbackTable from "@/components/feedbackTable";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import OutletStatistics from "@/components/OutletStatistics";
import { DashboardCard } from "@/components/DashboardCard";
import { FaUsers } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";
import Image from "next/image";

const Dashboard = () => {
  const userStats = [
    { name: "Jan", appUser: 1200, active: 500 },
    { name: "Feb", appUser: 2000, active: 1500 },
    { name: "Mar", appUser: 3000, active: 2200 },
    { name: "Apr", appUser: 4000, active: 3000 },
    { name: "May", appUser: 4500, active: 3500 },
    { name: "Jun", appUser: 4200, active: 3200 },
    { name: "Jul", appUser: 3800, active: 2900 },
    { name: "Aug", appUser: 3600, active: 2700 },
    { name: "Sep", appUser: 3900, active: 3000 },
    { name: "Oct", appUser: 4100, active: 3100 },
    { name: "Nov", appUser: 4500, active: 3700 },
    { name: "Dec", appUser: 5000, active: 4200 },
  ];

  const earnings = [
    { name: "Jan", earning: 10000 },
    { name: "Feb", earning: 20000 },
    { name: "Mar", earning: 40000 },
    { name: "Apr", earning: 70000 },
    { name: "May", earning: 60000 },
    { name: "Jun", earning: 50000 },
    { name: "Jul", earning: 55000 },
    { name: "Aug", earning: 65000 },
    { name: "Sep", earning: 70000 },
    { name: "Oct", earning: 80000 },
    { name: "Nov", earning: 85000 },
    { name: "Dec", earning: 95000 },
  ];

  return (
    <div className="">
        <div className=" bg-[#ED1E79] flex justify-between items-center py-3 px-10">
            <p className="uppercase font-semibold text-xl text-white ">sta task</p>
            <div className="flex items-center">
                <Image src={'/4.png'} className="rounded-full" width={50} height={50} />
                <p className="font-bold text-white">Admin Marie</p>
            </div>
        </div>
      <div>





      <div className=" px-6 mt-5">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <DashboardCard
            title="Total User"
            value="20.10K"
            icon={<FaUsers color="#ED1E79" />}
          />
          <DashboardCard
            title="Total Outlet"
            value="920"
            icon={<GiKnifeFork color="#ED1E79" />}
          />
          <DashboardCard
            title="Total Earning"
            value="150.10K"
            icon={<BsBarChartFill color="#ED1E79" />}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-bold mb-4">Total Users Statistics</h3>
            <BarChart width={700} height={300} data={userStats}>
              <Bar dataKey="appUser" fill="#FF0080" name="App User" />
              <Bar dataKey="active" fill="#00C853" name="Active" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </div>

          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-bold mb-4">Total Earning Growth</h3>
            <LineChart width={700} height={300} data={earnings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earning"
                stroke="#FF0080"
                strokeWidth={3}
              />
            </LineChart>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <OutletStatistics />
        </div>
        <div>
          <FeedbackTable />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
