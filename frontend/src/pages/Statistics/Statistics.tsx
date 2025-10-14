import type { CompanyData } from "../Home/Table";
import TickPlacementBars from "./Charts";

interface showTableProps {
  data: CompanyData[];
}

function Statistics({ data }: showTableProps) {
  return (
    <div className="statistics-container">
      <TickPlacementBars data={data} />
    </div>
  );
}

export default Statistics;
