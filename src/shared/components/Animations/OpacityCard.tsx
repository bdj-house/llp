import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

type Props = React.ComponentProps<typeof Box> & {
  index: number;
};

const MotionBox = motion.create(Box) as any;

export const OpacityCard: React.FC<PropsWithChildren<Props>> = ({ children, index, ...props }) => {
  return (
    <MotionBox
      {...props}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {children}
    </MotionBox>
  );
};
