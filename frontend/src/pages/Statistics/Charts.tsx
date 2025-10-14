import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { valueFormatter } from "./netflix";
import "./Charts.scss";
import type { CompanyData } from "../Home/FilterBlock";

interface ShowTableProps {
  data: CompanyData[];
}

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
      color: "#d1f06e",
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
    console.log(formattedData);

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
        </div>
      </div>
    </div>
  );
}
