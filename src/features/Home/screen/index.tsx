"use client";

import { ViewContainer } from "@/shared/components";
import { Box } from "@mui/material";
import Image from "next/image";
import tempLogo from "@/assets/logo/temp-logo.png";

export const HomeScreen: React.FC = () => {
  return (
    <ViewContainer>
      <Box
        sx={{
          position: "relative",
          width: "60%",
          aspectRatio: "1 / 1",
          mx: "auto",
        }}
      >
        <Image
          src={tempLogo}
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 600px) 80vw, (max-width: 1200px) 50vw, 400px"
          priority
        />
      </Box>
    </ViewContainer>
  );
};
