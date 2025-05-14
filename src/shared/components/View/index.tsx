import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

export const ViewContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
};
