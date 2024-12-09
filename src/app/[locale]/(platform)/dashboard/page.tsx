"use client";
import React from "react";
import { PieChart, Pie, Cell, Text } from "recharts";

const data = [
  { name: "Active", value: 20.1 }, // Highlighted segment
  { name: "Inactive", value: 79.9 }, // Remaining space
];

const COLORS = ["#C084FC", "#FFFFFF"]; // Purple for active slice, white for the rest

const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
  if (index === 0) {
    // Position the label dynamically within the active segment
    const radius = outerRadius * 0.7; // Adjust position closer to the center of the slice
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <Text
        x={x}
        y={y}
        textAnchor="middle"
        verticalAnchor="middle"
        fontSize={9}
        fontWeight="bold"
        fill="#FFFFFF"
      >
        {data[index].value.toFixed(1)}
      </Text>
    );
  }
  return null;
};

const CustomPieChart = () => {
  return (
    <PieChart width={160} height={160}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={50} // Only outer radius to create a full circle
        startAngle={0}
        endAngle={450} // Active slice at the top-right
        label={renderCustomLabel}
        labelLine={false} // Disable default label line
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index]}
            stroke="none"
            style={{
              filter:
                index === 0
                  ? "drop-shadow(0px 3px 6px rgba(0,0,0,0.16))"
                  : undefined,
            }}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default function Dashboard() {
  return (
    <div className="container">
      <div className="welcome flex justify-between">
        <div className="user-back">
          <p className="text-small-regular">Welcome Back,</p>
          <h4 className="title-h4-bold">Stefani Wong</h4>
        </div>
        <div className="notification-button">
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
      <div className="bmi-banner bg-blue-linear w-full h-[146px] rounded-[22px] mt-10 overflow-hidden blue-shadow">
        <div className="dot-bg bg-[url('/assets/svg/dots_banner.svg')] h-full flex justify-around items-center">
          <div className="right-info">
            <div className="label-text">
              <p className="text-medium-semi-bold">BMI (Body Mass Index)</p>
              <p className="text-small-regular mt-1">
                You have a normal weight
              </p>
            </div>
            <button
              type="button"
              className="w-2/3 mx-auto bg-purple-linear rounded-full py-3 mt-3"
            >
              <p className="text-caption-semi-bold">View More</p>
            </button>
          </div>
          <div className="left-chart">
            <CustomPieChart />
          </div>
        </div>
      </div>
      <div className="today-banner bg-blue-linear-10 w-full flex items-center justify-between h-[57px] rounded-[22px] mt-8 px-7">
        <p className="text-medium-medium">Today Target</p>
        <button type="button" className="bg-blue-linear rounded-full px-4 py-2">
          <p className="text-small-regular">Check</p>
        </button>
      </div>
    </div>
  );
}
