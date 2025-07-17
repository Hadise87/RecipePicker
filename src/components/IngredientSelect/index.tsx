/** @format */

import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface IngredientSelectProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (newValue: string[]) => void;
}
const IngredientSelect: React.FC<IngredientSelectProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <Autocomplete
      multiple
      options={options}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default IngredientSelect;
