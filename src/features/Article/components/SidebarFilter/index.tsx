'use client';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {
  Box,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

interface Props {
  tags: string[];
  selectedTags: string[];
  search: string;
  setSearch: (e: string) => void;
  onToggleTag: (tag: string) => void;
  onClear: () => void;
}

export const SidebarFilter: React.FC<Props> = ({
  tags,
  selectedTags,
  onToggleTag,
  onClear,
  setSearch,
  search,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '30%',
        right: 20,
        maxHeight: 'calc(100vh - 140px)',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 3,
        pr: 2,
        zIndex: -2,
        scrollbarWidth: 'thin',
        opacity: 0.2,
        transition: '0.3s all ease-in-out',
        '&:hover': {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <TextField
          label="Pesquisar título"
          variant="standard"
          size="small"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <IconButton onClick={onClear}>
          <RestartAltIcon fontSize="small" sx={{ mt: 1 }} />
        </IconButton>
      </Box>

      {tags
        .filter(s => s)
        .map(tag => {
          const isSelected = selectedTags.includes(tag);

          return (
            <Typography
              key={tag}
              onClick={() => onToggleTag(tag)}
              variant="body2"
              sx={{
                cursor: 'pointer',
                position: 'relative',
                fontWeight: isSelected ? 700 : 400,
                fontSize: isSelected ? '1.3rem' : '0.95rem',
                color: isSelected
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                pr: 2,
                transform: isSelected ? 'translateX(-12px)' : 'translateX(0)',
                transition: 'all 0.2s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: '105%',
                  transform: 'translateY(-50%)',
                  height: 2,
                  width: isSelected ? 18 : 0,
                  backgroundColor: theme.palette.primary.main,
                  transition: 'width 0.2s ease',
                },
                '&:hover': {
                  transform: 'translateX(-8px) scale(1.05)',
                  color: theme.palette.primary.main,
                  '&::after': {
                    width: 18,
                  },
                },
              }}
            >
              {tag}
            </Typography>
          );
        })}
    </Box>
  );
};
