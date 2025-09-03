import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Box, ButtonBase, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Routes } from '@/config/routes';
import { Article } from '@/sanity/types/schema';
import { IconButton, If } from '@/shared/components';
import { getArticleDate, getAuthorDisplayName, getInitials } from '../../utils';
import { RedirectDialog } from '../RedirectDialog';
import { SocialShareDialog } from '../SocialShare';

interface Props {
  article: Article;
  isVertical: boolean;
  isDark: boolean;
}

export const CardFooter: React.FC<Props> = ({ article, isVertical, isDark }) => {
  const theme = useTheme();
  const router = useRouter();

  const [shareOpen, setShareOpen] = useState(false);
  const [seeMoreOpen, setSeeMoreOpen] = useState(false);

  const secondaryTextColor = isDark ? 'rgba(255,255,255,0.7)' : theme.palette.text.primary;

  const iconMainColor = theme.palette.primary.main;
  const iconFontColor = theme.palette.primary.contrastText;

  const localUrl = `${process.env.NEXT_PUBLIC_DOMAIN}${Routes.Articles}/${article._id}`;
  const shareUrl = article.sourceLink ?? localUrl;

  const openShare = () => setShareOpen(true);
  const closeShare = () => setShareOpen(false);

  const openSeeMore = () => setSeeMoreOpen(true);
  const closeSeeMore = () => setSeeMoreOpen(false);

  const goToArticle = () => {
    if (!article.content) {
      openSeeMore();
      return;
    }

    router.push(`${Routes.Articles}/${article._id}`);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isVertical ? 'column-reverse' : 'row',
            gap: 1,
          }}
        >
          <Avatar alt={article.author} sx={{ bgcolor: iconMainColor, color: iconFontColor }}>
            {getInitials(article.author)}
          </Avatar>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <If condition={!!article.author} elseRender={<Box sx={{ height: 10 }} />}>
              <Typography variant="caption" fontWeight={700}>
                por {getAuthorDisplayName(article.author ?? '')}
              </Typography>
            </If>

            {article.publishedAt && (
              <Typography variant="caption" sx={{ color: secondaryTextColor }}>
                {getArticleDate(article)}
              </Typography>
            )}
          </Box>
        </Box>

        <Box display="flex" gap={2}>
          <IconButton action={openShare} customBackground={iconMainColor}>
            <ShareIcon fontSize="small" htmlColor={iconFontColor} />
          </IconButton>

          <IconButton
            action={goToArticle}
            customBorderColor={isDark ? theme.palette.background.paper : undefined}
          >
            <MoreHorizIcon
              fontSize="small"
              htmlColor={isDark ? theme.palette.background.paper : iconMainColor}
            />
          </IconButton>
        </Box>
      </Box>

      <SocialShareDialog
        open={shareOpen}
        onClose={closeShare}
        shareUrl={shareUrl}
        title={article.title}
      />

      <RedirectDialog open={seeMoreOpen} onClose={closeSeeMore} url={article.sourceLink ?? ''} />
    </>
  );
};
