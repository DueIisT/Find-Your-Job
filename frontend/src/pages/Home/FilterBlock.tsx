import "./FilterBlock.scss";
import React from "react";

export interface CompanyData {
  company: string;
  role: string;
  website: string;
  department: string;
  status: string;
  date: string;
  uuid: string;
}

type FilterBlockProps = {
  data: CompanyData[];
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
};

export function FilterBlock({ setData }: FilterBlockProps) {

  const addNewRequest = () => {
    const newRequest: CompanyData = {
      company: "New Company",
      role: "New Role",
      website: "https://newcompany.com", // Example website URL
      department: "Internal",
      status: "rejected",
      date: new Date().toString(),
      uuid: crypto.randomUUID(),
    };

    setData((prev) => [...prev, newRequest]);
  };

  return (
    <div className="filter-container">
      <div className="add-new" onClick={addNewRequest}>
        Add new
      </div>
    </div>
  );
}
