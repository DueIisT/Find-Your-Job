import "./FilterBlock.scss";
import { useState } from "react";
import { CustomModal } from "./Modal";

type FilterBlockProps = {
  data: CompanyData[];
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
};
export interface CompanyData {
  company: string;
  role: string;
  website: string;
  department: string;
  status: string;
  salary: number;
  date: string;
  uuid: string;
}

export function FilterBlock({ setData }: FilterBlockProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="filter-container">
      <div className="add-new" onClick={handleOpen}>
        Add New Request
      </div>
      <CustomModal
        isOpen={isOpen}
        handleClose={handleClose}
        setData={setData}
      />
    </div>
  );
}
