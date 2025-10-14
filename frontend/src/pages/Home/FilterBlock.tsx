import "./FilterBlock.scss";
import React from "react";
import { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

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

type FilterBlockProps = {
  data: CompanyData[];
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
};

export function FilterBlock({ setData }: FilterBlockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [website, setWebsite] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    company: false,
    role: false,
    website: false,
    department: false,
    status: false,
    salary: false,
  });

  const addNewRequest = () => {
    const newRequest: CompanyData = {
      company,
      role,
      website,
      department,
      status,
      salary: Number(salary),
      date: new Date().toString(),
      uuid: crypto.randomUUID(),
    };

    setCompany("");
    setRole("");
    setWebsite("");
    setDepartment("");
    setSalary("0");
    setStatus("");

    setData((prev) => [...prev, newRequest]);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const validateFields = () => {
    const newErrors = {
      company: company.trim() === "",
      role: role.trim() === "",
      website: website.trim() === "",
      department: department.trim() === "",
      salary: salary.trim() === "" || isNaN(Number(salary)),
      status: status.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = () => {
    if (validateFields()) {
      addNewRequest();
      handleClose();
    }
  };

  return (
    <div className="filter-container">
      <div className="add-new" onClick={handleOpen}>
        Add New Request
      </div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-content">
          <div className="modal-title">Add New Request</div>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              setErrors((prev) => ({ ...prev, company: false }));
            }}
            error={errors.company}
            helperText={errors.company ? "This field is required" : ""}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setErrors((prev) => ({ ...prev, role: false }));
            }}
            error={errors.role}
            helperText={errors.role ? "This field is required" : ""}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Website"
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
              setErrors((prev) => ({ ...prev, website: false }));
            }}
            error={errors.website}
            helperText={errors.website ? "This field is required" : ""}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setErrors((prev) => ({ ...prev, department: false }));
            }}
            error={errors.department}
            helperText={errors.department ? "This field is required" : ""}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Salary"
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value);
              setErrors((prev) => ({ ...prev, salary: false }));
            }}
            error={errors.salary}
            helperText={errors.salary ? "This field is required" : ""}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            label="Status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setErrors((prev) => ({ ...prev, status: false }));
            }}
            error={errors.status}
            helperText={errors.status ? "This field is required" : ""}
          />
          <Box className="modal-actions">
            <Button className="cancel-button" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "#d1f06e",
                color: "#363636",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "#c4e86f",
                },
              }}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
