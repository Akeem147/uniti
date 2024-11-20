"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [3000000],
        backgroundColor: ["#0747B6", "#2265de", "#2F91FA"],
      },
    ],
    labels: ["AfriBank"],
  };
  return (
    <Doughnut
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      data={data}
    />
  );
}
