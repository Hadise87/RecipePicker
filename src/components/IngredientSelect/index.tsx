/** @format */

import { Autocomplete, TextField, Checkbox } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
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
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={options}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default IngredientSelect;
