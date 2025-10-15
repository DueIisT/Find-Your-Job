
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import "./PiePositions.scss";

type CompanyData = {
  company: string;
  role: string;
  website: string;
  department: string;
  status: string;
  salary: number;
  date: string;
  uuid: string;
};

function getRoleDistribution(data: CompanyData[] = []) {
  if (!data.length) return [];

  const total = data.length;
  const counts: Record<string, number> = {};

  data.forEach((item) => {
    counts[item.role] = (counts[item.role] || 0) + 1;
  });

  return Object.entries(counts).map(([role, count]) => ({
    label: role,
    value: +((count / total) * 100).toFixed(0),
  }));
}

export default function PieArcLabel({ data = [] }: { data?: CompanyData[] }) {
  const roleStats = getRoleDistribution(data).map((item, i) => ({
    ...item,
    color: [
      "#A3D8F4", // мягкий голубой
      "#F7D6BF", // кремово-персиковый
      "#C5B4E3", // нежно-фиолетовый
      "#F9E79F", // пастельно-жёлтый
      "#BDE4A7", // светло-зелёный
      "#F5B7B1", // розовато-пастельный
      "#AED6F1", // светлый небесный
    ][i % 7],
  }));

  return (
    <div className="pie-wrapper">
      <div className="pie-container">
        {roleStats.length > 0 ? (
          <PieChart
            series={[
              {
                data: roleStats,
                arcLabel: (item) => `${item.label}: ${Math.round(item.value)}%`,
                arcLabelMinAngle: 35,
                arcLabelRadius: "60%",
              },
            ]}
            sx={{
              backgroundColor: "transparent",
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
              },
            }}
            width={320}
            height={320}
          />
        ) : (
          <p style={{ color: "rgba(255,255,255,0.6)" }}>No data available</p>
        )}
        <h2 className="charts-title">Role Distribution</h2>
      </div>
    </div>
  );
}
