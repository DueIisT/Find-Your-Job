import type { CompanyData } from "../Home/Table";
import TickPlacementBars from "./Charts";
import PieArcLabel from "./PiePositions";
import "./Statistics.scss";

interface showTableProps {
  data: CompanyData[];
}

function Statistics({ data }: showTableProps) {
  return (
    <div className="statistics-container">
      <div className="div1"><TickPlacementBars data={data} /></div>
      <div className="div2"><PieArcLabel data={data} /></div>
      <div className="div3">Some other stats</div>
      <div className="div4">Some other stats</div>
    </div>
  );
}

export default Statistics;
