import { Article } from "@/sanity/types/schema";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  article: Article;
  isDark: boolean;
};

export const CardContent: React.FC<Props> = ({ article, isDark }) => {
  const theme = useTheme();

  const secondaryTextColor = isDark
    ? "rgba(255,255,255,0.7)"
    : theme.palette.text.secondary;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "flex-start",
        mt: 1,
        width: "100%",
        flex: 1,
      }}
    >
      <Typography variant="body1" fontWeight={600}>
        {article.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: secondaryTextColor,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "6",
          WebkitBoxOrient: "vertical",
        }}
      >
        {article.slug?.current}
      </Typography>
    </Box>
  );
};
