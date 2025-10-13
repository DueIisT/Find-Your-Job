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
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const addNewRequest = () => {
    const newRequest: CompanyData = {
      company,
      role,
      website,
      department,
      status,
      date: new Date().toString(),
      uuid: crypto.randomUUID(),
    };

    setCompany("");
    setRole("");
    setWebsite("");
    setDepartment("");
    setStatus("");

    setData((prev) => [...prev, newRequest]);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Removed modalStyle as it's now in SCSS

  const handleSubmit = () => {
    addNewRequest();
    handleClose();
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
            fullWidth
            margin="normal"
            label="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
