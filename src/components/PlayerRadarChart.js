import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function PlayerRadarChart({ totals, metrics }) {
  const data = {
    labels: ["Goals", "Assists", "Saves", "Wins", "Points", "Shots"],
    datasets: [
      {
        label: "Player Profile",
        data: [
          totals.goals,
          totals.assists,
          totals.saves,
          totals.wins,
          metrics.points,
          totals.shots,
        ],
        fill: true,
        backgroundColor: "rgba(52, 144, 211, 0.25)",
        borderColor: "rgb(52, 144, 211)",
        pointBackgroundColor: "rgb(52, 144, 211)",
        pointBorderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          color: "white",
          backdropColor: "transparent",
        },
        pointLabels: {
          color: "white",
          font: {
            weight: "bold",
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.25)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.25)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="radar-card">
      <h4>Player Radar</h4>

      <div className="radar-chart-wrapper">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}

export default PlayerRadarChart;