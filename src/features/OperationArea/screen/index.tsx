'use client';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BusinessIcon from '@mui/icons-material/Business';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PublicIcon from '@mui/icons-material/Public';
import SecurityIcon from '@mui/icons-material/Security';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { useMemo } from 'react';
import { OpacityCard, ViewContainer } from '@/shared/components';

const practiceAreas = [
  {
    title: 'Insurance Law',
    icon: <GavelIcon fontSize="large" />,
    highlight: true,
  },
  { title: 'Environmental Law', icon: <PublicIcon fontSize="large" /> },
  { title: 'Immigration Law', icon: <FlightTakeoffIcon fontSize="large" /> },
  { title: 'Corporate Law', icon: <BusinessIcon fontSize="large" /> },
  { title: 'Employment Law', icon: <GroupIcon fontSize="large" /> },
  {
    title: 'Innovation & Technology',
    icon: <LightbulbIcon fontSize="large" />,
  },
  { title: 'Criminal Law', icon: <SecurityIcon fontSize="large" /> },
  { title: 'Criminal Law 2', icon: <SecurityIcon fontSize="large" /> },
];

const title = 'O que nós fazemos';
const subject = `Na Idalgo & Cortijo, priorizamos o seu sucesso e bem-estar. Questões
        jurídicas podem ser avassaladoras, por isso oferecemos uma abordagem
        personalizada para cada caso.`;
const subtitle = `Especializações`;

export const OperationAreaScreen = () => {
  const theme = useTheme();

  const areas = useMemo(() => {
    if (practiceAreas.length <= 7) return practiceAreas;

    const newItems = practiceAreas.slice(0, 7).concat({
      title: 'Ver Todos',
      icon: <TravelExploreIcon fontSize="large" />,
    });

    return newItems;
  }, []);

  return (
    <ViewContainer header={{ title, subtitle, subject }}>
      <Container sx={{ height: '90vh', placeItems: 'center', py: 18 }}>
        <Grid container spacing={2} justifyContent="center">
          {areas.map((area, index) => (
            <Grid key={area.title} size={3}>
              <OpacityCard index={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: { xs: 200, sm: 220, md: 240 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    py: 2,
                    px: 3,
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                    backgroundColor: area.highlight
                      ? theme.palette.background.default
                      : theme.palette.background.paper,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[2],
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                  onClick={() => {
                    // Will add links later
                  }}
                >
                  <Box>{area.icon}</Box>

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gap={1}
                  >
                    <Typography fontWeight={600}>{area.title}</Typography>
                    <IconButton size="small" disableRipple>
                      <ArrowOutwardIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>
              </OpacityCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ViewContainer>
  );
};
