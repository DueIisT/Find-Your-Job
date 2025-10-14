import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import "./Table.scss";
import { FilterBlock } from "./FilterBlock";

export interface CompanyData {
  company: string;
  role: string;
  website: string;
  department: string;
  status: string;
  date: string;
  uuid: string;
}

interface ShowTableProps {
  data: CompanyData[];
  updateData: (uuid: string, update: Partial<CompanyData>) => void;
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
}

export function ShowTable({ data, updateData, setData }: ShowTableProps) {
  const changeStatus = (uuid: string) => {
    updateData(uuid, { status: "in progress" });
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
            {url.replace("https://", "")}
          </a>
        );
      },
    },
    { accessorKey: "department", header: "Department" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue<string>();
        return (
          <span
            className={
              status === "in progress" ? "status-progress" : "status-rejected"
            }
          >
            {status}
          </span>
        );
      },
    },
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
                  onClick={() => changeStatus(row.original.uuid)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
