import { Box } from "@mui/material";
import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  height: number;
  width: number;
};

export const CardImage: React.FC<Props> = ({ src, alt, height, width }) => {
  if (!src) return null;

  return (
    <Box
      sx={{
        position: "relative",
        height,
        width,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={alt}
        objectFit="cover"
        width={width}
        height={height}
        style={{ borderRadius: 12 }}
      />
    </Box>
  );
};
