// option draw
// 'use client';

// import { Grid } from '@mui/material';
// import { ViewContainer } from '@/shared/components';
// import { Art, Info } from '../components';

// export const HomeScreen: React.FC = () => {
//   return (
//     <ViewContainer>
//       <Grid container sx={{ height: '100vh' }} spacing={4}>
//         <Grid
//           size={5}
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'flex-end',
//             mt: -12,
//           }}
//         >
//           <Info />
//         </Grid>
//         <Grid
//           size={7}
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             mt: 12,
//           }}
//         >
//           <Art />
//         </Grid>
//       </Grid>
//     </ViewContainer>
//   );
// };

// option background
// 'use client';

// import { Box, Grid } from '@mui/material';
// import main from '@/assets/images/test-3.webp';
// import { ViewContainer } from '@/shared/components';
// import { Info } from '../components';

// export const HomeScreen: React.FC = () => {
//   return (
//     <ViewContainer>
//       <Box
//         sx={{
//           position: 'relative',
//           width: '100%',
//           height: '100vh',
//           overflow: 'hidden',
//         }}
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 0,
//             zIndex: 0,
//             backgroundImage: `url(${main.src})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             transform: 'scale(1.125)',
//             transition: 'transform 1s ease-in-out, filter 1s ease-in-out',
//           }}
//         />

//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 0,
//             zIndex: 1,
//             backgroundImage: `
//               linear-gradient(to top, rgba(10,10,10,0.7), rgba(10,10,10,0.7)),
//               url('https://i.imgur.com/UC3r2hD.png')
//             `,
//             backgroundSize: `auto, 256px 256px`,
//             backgroundPosition: `center, center`,
//             backgroundRepeat: `no-repeat, repeat`,
//             transition: 'background-color 1s ease-in-out 0.5s',
//           }}
//         />

//         <Grid
//           container
//           sx={{
//             position: 'relative',
//             zIndex: 2,
//             height: '100%',
//             alignItems: 'center',
//             ml: 12,
//           }}
//         >
//           <Info />
//         </Grid>
//       </Box>
//     </ViewContainer>
//   );
// };

'use client';

import { Grid } from '@mui/material';
import { ViewContainer } from '@/shared/components';
import { Art, Info } from '../components';

export const HomeScreen: React.FC = () => {
  return (
    <ViewContainer>
      <Grid container sx={{ height: '100vh' }} spacing={4}>
        <Grid
          size={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Info />
        </Grid>
        <Grid
          size={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Art />
        </Grid>
      </Grid>
    </ViewContainer>
  );
};
