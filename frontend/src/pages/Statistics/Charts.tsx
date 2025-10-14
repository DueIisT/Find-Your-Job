import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./netflix";
import "./Charts.scss";

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
    { dataKey: "seoul", label: "Salary", color: "#d1f06e", valueFormatter },
  ],
  height: 400,
  margin: { left: 0 },
};

export default function TickPlacementBars() {
  const [tickPlacement] = React.useState<
    "start" | "end" | "middle" | "extremities"
  >("middle");
  const [tickLabelPlacement] = React.useState<"middle" | "tick">("middle");

  return (
    <div className="charts-wrapper">
      <div className="charts-container">
        <h2 className="charts-title">Salary request</h2>

        <div className="charts-graph">
          <BarChart
            dataset={dataset}
            xAxis={[
              {
                dataKey: "month",
                tickPlacement,
                tickLabelPlacement,
                tickLabelStyle: { fill: "rgba(255, 255, 255, 0.87)" },
              },
            ]}
            {...chartSetting}
          />
        </div>
      </div>
    </div>
  );
}
