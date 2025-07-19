/** @format */

import Dropdowns from "@/components/Dropdowns/Dropdowns";
import Navbar from "@/components/Navbar/Navbar";
import { Container } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Dropdowns />
    </Container>
  );
}
