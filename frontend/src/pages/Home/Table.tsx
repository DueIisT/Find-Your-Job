import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import "./Table.scss";
import { FilterBlock } from "./FilterBlock";
import { CustomModal } from "./Modal";

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

interface ShowTableProps {
  data: CompanyData[];
  updateData: (uuid: string, update: Partial<CompanyData>) => void;
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
}

export function ShowTable({ data, setData }: ShowTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableItem, setEditableItem] = useState<CompanyData | null>(null);

  const handleEdit = (item: CompanyData) => {
    setEditableItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (updated: CompanyData) => {
    setData((prev) =>
      prev.map((item) => (item.uuid === updated.uuid ? updated : item))
    );
  };

  const columns: ColumnDef<CompanyData>[] = [
    { accessorKey: "company", header: "Company" },
    { accessorKey: "role", header: "Role" },
    {
      accessorKey: "website",
      header: "Website",
      cell: ({ getValue }) => {
        const url = getValue<string>();
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url.replace("https://", "").replace("/", "")}
          </a>
        );
      },
    },
    { accessorKey: "salary", header: "Salary" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "status", header: "Status" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <FilterBlock data={data} setData={setData} />
      <table className="table-container">
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td>
                <button
                  className="update-button"
                  onClick={() => handleEdit(row.original)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CustomModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        setData={setData}
        editableItem={editableItem}
        onSave={handleSave}
      />
    </>
  );
}
