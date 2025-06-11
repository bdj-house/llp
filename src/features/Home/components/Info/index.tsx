// option draw

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Box, ButtonBase, Typography, useTheme } from '@mui/material';
// import Image from 'next/image';
// import testImage from '@/assets/logo/temp-logo.png';

// export const Info = () => {
//   const theme = useTheme();

//   return (
//     <Box>
//       <Box>
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//           <Image
//             src={testImage}
//             alt="Logo"
//             width={420}
//             height={240}
//           />
//         </Box>

//         <Typography variant="h6" color="textSecondary">
//           Conheça um escritório pensado para inspirar confiança
//           conforto e
//           <br />
//           resultados
//           de alto nível.
//         </Typography>
//       </Box>

//       <ButtonBase
//         onClick={() => {
//           const section = document.getElementById('nosso-espaco');
//           section?.scrollIntoView({ behavior: 'smooth' });
//         }}
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'absolute',
//           gap: 1,
//           left: '120px',
//           bottom: '120px',
//           border: `0.8px solid ${theme.palette.primary.dark}`,
//           borderRadius: '50%',
//         }}
//       >
//         <ExpandMoreIcon color="primary" sx={{ fontSize: 48 }} />
//       </ButtonBase>

//     </Box>
//   );
// };

// option background

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Box, ButtonBase, Typography, useTheme } from '@mui/material';
// import Image from 'next/image';
// import testImage from '@/assets/images/main-5.png';

// export const Info = () => {
//   const theme = useTheme();

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Box>
//         <Image
//           src={testImage}
//           alt="Logo"
//           height={240}
//           width={360}
//         />

//         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//           Conheça um escritório pensado para inspirar
//           confiança
//           <br />
//           conforto e
//           resultados
//           de alto nível.
//         </Typography>
//       </Box>

//       <ButtonBase
//         onClick={() => {
//           const section = document.getElementById('nosso-espaco');
//           section?.scrollIntoView({ behavior: 'smooth' });
//         }}
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'absolute',
//           gap: 1,
//           left: '10px',
//           bottom: '120px',
//           border: `0.8px solid ${theme.palette.background.default}`,
//           borderRadius: '50%',
//         }}
//       >
//         <ExpandMoreIcon sx={{ fontSize: 48, color: theme.palette.background.default }} />
//       </ButtonBase>

//     </Box>
//   );
// };

// option side image

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, ButtonBase, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import testImage from '@/assets/logo/temp-logo.png';

export const Info = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 12 }}>
          <Image
            src={testImage}
            alt="Logo"
            width={480}
            height={280}
          />
        </Box>

        <Typography variant="h5" color="secondary">
          Excelência em cada detalhe
        </Typography>

        <Typography variant="h6" color="textSecondary" mt={2}>
          Conheça um escritório pensado para inspirar confiança

          conforto e
          resultados
          <br />

          de alto nível.
        </Typography>
      </Box>

      <ButtonBase
        onClick={() => {
          const section = document.getElementById('nosso-espaco');
          section?.scrollIntoView({ behavior: 'smooth' });
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          gap: 1,
          left: '120px',
          bottom: '120px',
          border: `0.8px solid ${theme.palette.primary.dark}`,
          borderRadius: '50%',
        }}
      >
        <ExpandMoreIcon color="primary" sx={{ fontSize: 48 }} />
      </ButtonBase>
    </Box>
  );
};
