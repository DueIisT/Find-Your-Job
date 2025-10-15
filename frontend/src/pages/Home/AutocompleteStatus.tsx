import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface ControllableStatesProps {
  required?: boolean;
  fullWidth?: boolean;
  margin?: "none" | "dense" | "normal";
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

export default function ControllableStates({
  required,
  fullWidth,
  margin = "normal",
  label,
  value,
  options,
  onChange,
  error,
  helperText,
}: ControllableStatesProps) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => onChange(newValue || "")}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      options={options}
      fullWidth={fullWidth}
      renderInput={(params) => (
        <TextField
          {...params}
          required={required}
          margin={margin}
          label={label}
          error={error}
          helperText={helperText}
        />
      )}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "#3f3f3f",
            color: "#EEEEEE",
            borderRadius: "10px",
          },
        },
        listbox: {
          sx: {
            "& .MuiAutocomplete-option": {
              "&:hover": { backgroundColor: "rgba(217, 242, 132, 0.2)" },
              "&[aria-selected='true']": {
                backgroundColor: "rgba(217, 242, 132, 0.4)",
                color: "#d1f06e",
              },
            },
          },
        },
      }}
    />
  );
}
