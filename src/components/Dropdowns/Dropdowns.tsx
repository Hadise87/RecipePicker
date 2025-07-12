/** @format */

import React from "react";
import Box from "@mui/material/Box";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";

const Dropdowns = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          //   width: "95vw",
        }}
      >
        <DropdownMenuItem label="Meat and Fish" />
        <DropdownMenuItem label="Vegetables" />
        <DropdownMenuItem label="Beans" />
        <DropdownMenuItem label="Grains" />
        <DropdownMenuItem label="Others" />
      </Box>
    </div>
  );
};

export default Dropdowns;
