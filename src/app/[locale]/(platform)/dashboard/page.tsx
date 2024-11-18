import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Purple", "Blue", "Green"], // Labels for each slice
    datasets: [
      {
        label: "Sample Dataset",
        data: [20.1, 50, 29.9], // Values for each slice
        backgroundColor: ["#D946EF", "#3B82F6", "#22C55E"], // Slice colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Pie data={data} options={options} />;
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
      <div className="bmi-banner bg-blue-linear w-full h-[146px] rounded-[22px] mt-10 overflow-hidden">
        <div className="dot-bg bg-[url('/assets/svg/dots_banner.svg')] h-full">
          <div className="right-info"></div>
          <div className="left-chart">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
