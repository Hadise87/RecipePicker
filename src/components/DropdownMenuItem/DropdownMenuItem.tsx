/** @format */

"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
interface props {
  label: string;
}

const DropdownMenuItem = ({ label }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Typography onClick={() => setIsOpen(!isOpen)}>
        {label} {isOpen ? "^" : "v"}
      </Typography>
    </Box>
  );
};

export default DropdownMenuItem;
