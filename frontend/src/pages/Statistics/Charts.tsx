import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { valueFormatter } from "./netflix";
import "./Charts.scss";
import type { CompanyData } from "../Home/FilterBlock";

interface ShowTableProps {
  data: CompanyData[];
}

const colors = [
  "#A3D8F4",
  "#F7D6BF",
  "#C5B4E3",
  "#F9E79F",
  "#BDE4A7",
  "#F5B7B1",
  "#AED6F1",
];

const chartSetting = {
  yAxis: [
    {
      label: "salary, $",
      width: 60,
      tickLabelStyle: { fill: "rgba(255, 255, 255, 0.87)" },
      labelStyle: { fill: "rgba(255, 255, 255, 0.87)" },
    },
  ],
  series: [
    {
      dataKey: "salary",
      label: "Salary Request",
      valueFormatter,
    },
  ],
  height: 400,
  margin: { left: 0 },
};

export default function TickPlacementBars({ data }: ShowTableProps) {
  const [tickPlacement] = React.useState<
    "start" | "end" | "middle" | "extremities"
  >("middle");
  const [tickLabelPlacement] = React.useState<"middle" | "tick">("middle");

  const formattedData = data
    .map((item) => {
      const date = new Date(item.date);
      return {
        month: date.toLocaleString("en-US", { month: "numeric", year: "numeric" }),
        salary: item.salary,
        date,
      };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  React.useEffect(() => {
    const styleId = "dynamic-bar-colors";
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    let css = "";
    formattedData.forEach((_, index) => {
      css += `.charts-graph rect:nth-of-type(${index + 1}) { fill: ${
        colors[index % colors.length]
      }; }\n`;
    });

    styleTag.innerHTML = css;
  }, [formattedData]);

  return (
    <div className="charts-wrapper">
      <div className="charts-container">
        <div className="charts-graph">
          <BarChart
            dataset={formattedData}
            xAxis={[
              {
                dataKey: "month",
                tickPlacement,
                tickLabelPlacement,
                tickLabelStyle: { fill: "rgba(255, 255, 255, 0.87)", fontSize: 12 },
              },
            ]}
            {...chartSetting}
          />
          <h2 className="charts-title">Requested salary</h2>
        </div>
      </div>
    </div>
  );
}
