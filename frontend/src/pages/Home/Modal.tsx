import { Modal, Box, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import type { CompanyData } from "./FilterBlock";
import ControllableStates from "./AutocompleteStatus";

export function CustomModal({
  isOpen,
  handleClose,
  setData,
  editableItem,
  onSave,
}: {
  isOpen: boolean;
  handleClose: () => void;
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
  editableItem?: CompanyData | null;
  onSave?: (updated: CompanyData) => void;
}) {
  const isEditMode = !!editableItem;

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

  useEffect(() => {
    if (editableItem) {
      setCompany(editableItem.company);
      setRole(editableItem.role);
      setWebsite(editableItem.website);
      setSalary(editableItem.salary.toString());
      setDepartment(editableItem.department);
      setStatus(editableItem.status);
    } else {
      setCompany("");
      setRole("");
      setWebsite("");
      setSalary("");
      setDepartment("");
      setStatus("");
    }
  }, [editableItem, isOpen]);

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
    if (!validateFields()) return;

    const newData: CompanyData = {
      uuid: editableItem ? editableItem.uuid : crypto.randomUUID(),
      date: editableItem ? editableItem.date : new Date().toString(),
      company,
      role,
      website,
      department,
      status,
      salary: Number(salary),
    };

    if (isEditMode && onSave) {
      onSave(newData);
    } else {
      setData((prev) => [...prev, newData]);
    }

    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box className="modal-content">
        <div className="modal-title">
          {isEditMode ? "Edit Request" : "Add New Request"}
        </div>

        <TextField
          required
          fullWidth
          margin="normal"
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          error={errors.company}
          helperText={errors.company ? "This field is required" : ""}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          error={errors.role}
          helperText={errors.role ? "This field is required" : ""}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          error={errors.website}
          helperText={errors.website ? "This field is required" : ""}
        />
        <ControllableStates
          required
          fullWidth
          margin="normal"
          label="Department"
          value={department}
          options={[
            "Development",
            "Marketing",
            "Sales",
            "Finance",
            "Project Management",
            "Human Resources",
            "Customer Service",
            "Information Technology",
            "Manufacturing",
            "Administration",
            "Research and Development",
            "Logistics",
            "Quality",
            "Operations",
            "Business Analysis",
            "Customer Support",
            "Medical Services",
            "Education and Training",
            "Legal Department",
            "Public Relations",
          ]}
          onChange={(value) => setDepartment(value)}
          error={errors.department}
          helperText={errors.department ? "This field is required" : ""}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          error={errors.salary}
          helperText={errors.salary ? "This field is required" : ""}
        />
        <ControllableStates
          required
          fullWidth
          margin="normal"
          label="Status"
          value={status}
          options={[
            "Applied",
            "Interviewing",
            "Offered",
            "Rejected",
            "Accepted",
          ]}
          onChange={(value) => setStatus(value)}
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
              "&:hover": { backgroundColor: "#c4e86f" },
            }}
            onClick={handleSubmit}
          >
            {isEditMode ? "Save" : "Add"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
