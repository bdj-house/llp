"use client";

import { ArticleItem } from "@/shared/models/article";
import { Avatar, Box, Card, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type Props = {
  article: ArticleItem;
};

export const ArticleCard: React.FC<Props> = ({ article }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        padding: 1,
        height: 580,
        width: 280,
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {article.imgSrc && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image
            src={article.imgSrc}
            alt={article.slug}
            width={330}
            height={240}
            style={{ borderRadius: 12, objectFit: "cover" }}
          />
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingX: 2,
          paddingY: 1,
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-start",
            marginTop: 1,
            width: "100%",
            flex: 1,
          }}
        >
          <Typography variant="body1" fontWeight={600}>
            {article.title}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {article.slug}
          </Typography>
        </Box>

        <Box sx={{ mb: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="caption" fontWeight={700}>
            por {article.author.name}
          </Typography>

          {article.date && (
            <Typography variant="caption">
              em{" "}
              {article.date.toLocaleDateString("pt-BR", { dateStyle: "long" })}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
            justifySelf: "flex-end",
            width: "100%",
          }}
        >
          <Avatar alt={article.author.name} src={article.author.imgSrc} />

          <Box display={"flex"} gap={1} justifySelf={"flex-end"}>
            <Avatar sx={{ background: theme.palette.primary.main }}>
              <ShareIcon fontSize="small" />
            </Avatar>
            <Avatar
              sx={{
                background: theme.palette.background.paper,
                borderColor: theme.palette.secondary.main,
                borderWidth: 1,
                borderStyle: "solid",
              }}
            >
              <MoreHorizIcon fontSize="small" color="action" />
            </Avatar>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
